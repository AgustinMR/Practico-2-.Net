import { OnInit, Input, Component } from "@angular/core";
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { EmployeeTaskService, ChannelEvent } from "../employee.task.service";

@Component({
    selector: 'tsi1-employee-task',
    templateUrl: 'employee-task.component.html',
    styleUrls: ['employee-task.component.css'],
    moduleId: module.id,
    providers: [EmployeeTaskService]
})
export class EmployeeTaskCompontent implements OnInit {
    @Input() apiUrl: string;
    @Input() channel: string;
    eventName = "user.connected";

    messages = "";

    constructor(
        private http: Http,
        private channelService: EmployeeTaskService
    ) {

    }

    ngOnInit() {
        // Get an observable for events emitted on this channel
        //
        /*this.channelService.sub(this.channel).subscribe(
            (x: ChannelEvent) => {
                if (x.Name === "user.subscribed") {
                    alert();
                    this.appendStatusUpdate(x);
                }
            },
            (error: any) => {
                console.warn("Attempt to join channel failed!", error);
            }
        );*/
        /*alert(this.channelService.starting$);
        this.channelService.sub("USUARIO_CONECTADO").map(response => {
            alert(response);
            if (response.Name === "user.subscribed") {
                alert();
            }
        }).subscribe(response => console.log("incomming message at USUARIO_CONECTADO channel with Name:", response), error => console.log("Ha ocurrido un error: ", error), () => { });*/
    }


    private appendStatusUpdate(ev: ChannelEvent): void {
        // Just prepend this to the messages string shown in the textarea
        //
        alert();
        let date = new Date();
        switch (ev.Data.State) {
            case "starting": {
                this.messages = `${date.toLocaleTimeString()} : starting\n` + this.messages;
                break;
            }

            case "complete": {
                this.messages = `${date.toLocaleTimeString()} : complete\n` + this.messages;
                break;
            }

            default: {
                this.messages = `${date.toLocaleTimeString()} : ${ev.Data.State} : ${ev.Data.PercentComplete} % complete\n` + this.messages;
            }
        }
    }

    callApi() {
        this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .subscribe((message: string) => { console.log(message); });
    }

}