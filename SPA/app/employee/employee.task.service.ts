import { Injectable, Inject } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export class SignalrWindow extends Window {
    $: any;
}

@Injectable()
export class EmployeeTaskService {

    isReady: Observable<any>;
    connectionState: Observable<ConnectionState>;
    error: Observable<string>;

    private connectionStateSubject = new Subject<ConnectionState>();
    private startingSubject = new Subject<any>();
    private errorSubject = new Subject<any>();

    private hubConnection: any;
    private hubProxy: any;
    
    private subjects = new Array<ChannelSubject>();

    constructor( @Inject(SignalrWindow) private window: SignalrWindow,  @Inject("channel.config") private channelConfig: ChannelConfig ) {
        if (this.window.$ === undefined || this.window.$.hubConnection === undefined) {
            throw new Error("The variable '$' or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly");
        }
        this.connectionState = this.connectionStateSubject.asObservable();
        this.error = this.errorSubject.asObservable();
        this.isReady = this.startingSubject.asObservable();

        this.hubConnection = this.window.$.hubConnection();
        this.hubConnection.url = channelConfig.url;
        this.hubProxy = this.hubConnection.createHubProxy(channelConfig.hubName);

        this.hubConnection.stateChanged((state: any) => {
            let newState = ConnectionState.Connecting;

            switch (state.newState) {
                case this.window.$.signalR.connectionState.connecting:
                    newState = ConnectionState.Connecting;
                    break;
                case this.window.$.signalR.connectionState.connected:
                    newState = ConnectionState.Connected;
                    break;
                case this.window.$.signalR.connectionState.reconnecting:
                    newState = ConnectionState.Reconnecting;
                    break;
                case this.window.$.signalR.connectionState.disconnected:
                    newState = ConnectionState.Disconnected;
                    break;
            }
            this.connectionStateSubject.next(newState);
        });

        this.hubConnection.error((error: any) => {
            // Push the error on our subject
            //
            this.errorSubject.next(error);
        });

        this.hubProxy.on("onEvent", (channel: string, ev: EventMessage) => {

            let channelSub = this.subjects.find((x: ChannelSubject) => {
                return x.channel === channel;
            }) as ChannelSubject;

            if (channelSub !== undefined) {
                return channelSub.subject.next(ev);
            }
        });

    }

    /**
     * Start the SignalR connection. The starting$ stream will emit an 
     * event if the connection is established, otherwise it will emit an
     * error.
     */
    start(): void {
        this.hubConnection.start()
            .done(() => {
                this.startingSubject.next();
            })
            .fail((error: any) => {
                this.startingSubject.error(error);
            });
    }

    /** 
     * Get an observable that will contain the data associated with a specific 
     * channel 
     * */
    sub(channel: string): Observable<EventMessage> {

        let channelSub = this.subjects.find((x: ChannelSubject) => {
            return x.channel === channel;
        }) as ChannelSubject;

        if (channelSub !== undefined) {
            console.log(`Found existing observable for ${channel} channel`)
            return channelSub.subject.asObservable();
        }

        channelSub = new ChannelSubject();
        channelSub.channel = channel;
        channelSub.subject = new Subject<EventMessage>();
        this.subjects.push(channelSub);

        this.isReady.subscribe(() => {
            this.hubProxy.invoke("Subscribe", channel)
                .done(() => {
                    console.log(`Successfully subscribed to ${channel} channel`);
                })
                .fail((error: any) => {
                    //channelSub.subject.error(error);
                    console.log("No se ha podido subscribir al canal. {error}", error);
                });
        },
            (error: any) => {
                //channelSub.subject.error(error);
                console.log("Error en mostrar el error. {error}", error);
            });

        return channelSub.subject.asObservable();
    }

    publish(ev: EventMessage): void {
        this.hubProxy.invoke("Publish", ev);
    }

}

export enum ConnectionState {
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
    Disconnected = 4
}

export class ChannelConfig {
    url: string;
    hubName: string;
    channel: string;
}

export class EventMessage {
    ChannelName: string;
    Timestamp: Date;
    Data: any;
    Json: string;

    constructor() {
        this.Timestamp = new Date();
    }
}

class ChannelSubject {
    channel: string;
    subject: Subject<EventMessage>;
}