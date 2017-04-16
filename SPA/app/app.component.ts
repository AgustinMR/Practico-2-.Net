﻿import { Component } from '@angular/core';
import { EmployeeTaskService, ConnectionState, ChannelEvent } from "./employee/employee.task.service";
import { Observable } from "rxjs/Observable";

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
    }

    toggleShowOtro() {
        this.showOtro = true;
        this.showTable = false;
    }

    showNotification() {
        this.hayEvento = true;
        setTimeout(() => { this.hayEvento = false; }, 300);
    }

    connectionState$: Observable<string>;

    constructor(
        private channelService: EmployeeTaskService
    ) {

        // Let's wire up to the signalr observables
        //
        this.connectionState$ = this.channelService.connectionState$
            .map((state: ConnectionState) => { return ConnectionState[state]; });

        this.channelService.error$.subscribe(
            (error: any) => { console.warn(error); },
            (error: any) => { console.error("errors$ error", error); }
        );

        // Wire up a handler for the starting$ observable to log the
        //  success/fail result
        //
        this.channelService.starting$.subscribe(
            () => { console.log("signalr service has been started"); },
            () => { console.warn("signalr service failed to start!"); }
        );
    }

    ngOnInit() {
        // Start the connection up!
        //
        console.log("Starting the channel service");

        this.channelService.start();
        this.channelService.sub("USUARIO_CONECTADO").map(response => {
            /*switch (response.Name) {
                case "user.connected":
                    {
                        alert();
                        this.showNotification();
                    }
            }*/
            //alert(response.Json);
            if (response.Name === "user.connected") {
                alert("VAPAI CABEZA");
                this.showNotification();
            }
        }).subscribe(response => console.log("incomming message at USUARIO_CONECTADO channel with Name:", response), error => console.log("Ha ocurrido un error: ", error), () => { });
    }
}
