import { Component } from '@angular/core';
import { EmployeeTaskService, ConnectionState, ChannelEvent } from "./employee/employee.task.service";
import { Observable } from "rxjs/Observable";
import { Http, HttpModule, Response } from '@angular/http';

@Component({
    selector: 'tsi1',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id,
    providers: [EmployeeTaskService]
})
export class AppComponent {

    showTable = false;
    showOtro = false;
    hayEvento = false;

    toggleShowTable() {
        this.showTable = true;
        this.showOtro = false;
        this.registrarAcceso();
    }

    toggleShowOtro() {
        this.showOtro = true;
        this.showTable = false;
    }

    showNotification() {
        this.hayEvento = true;
        setTimeout(() => { this.hayEvento = false; }, 5000);
    }

    connectionState$: Observable<string>;

    constructor(
        private channelService: EmployeeTaskService,
        private http: Http
    ) {

        // Let's wire up to the signalr observables
        //
        this.connectionState$ = this.channelService.connectionState$
            .map((state: ConnectionState) => { return ConnectionState[state]; });

        this.channelService.error$.subscribe(
            (error: any) => { console.warn(error); },
            (error: any) => { console.error("errors$ error", error); }
        );

        this.channelService.starting$.subscribe(
            () => { console.log("signalr service has been started"); },
            () => { console.warn("signalr service failed to start!"); }
        );
    }

    registrarAcceso() {
        this.http.get("http://localhost:9123/tasks/employees")
            .map((res: Response) => res.json())
            .subscribe((message: string) => { console.log(message); });
    }

    ngOnInit() {
        // Start the connection up!
        //
        console.log("Starting the channel service");

        this.channelService.start();
        this.channelService.sub("USUARIO_CONECTADO").map(response => {
            if (response.Name === "user.registred") {
                this.showNotification();
            }
        }).subscribe(response => console.log(), error => console.log("Ha ocurrido un error: ", error), () => { });
    }
}
