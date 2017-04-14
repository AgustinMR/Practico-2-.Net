import { Component } from '@angular/core';
import { EmployeeTaskService, ConnectionState } from "./employee/employee.task.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'tsi1',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id
})
export class AppComponent {

    showTable = false;
    showOtro = false;

    toggleShowTable() {
        this.showTable = true;
        this.showOtro = false;
    }

    toggleShowOtro() {
        this.showOtro = true;
        this.showTable = false;
    }

    connectionState$: Observable<string>;

    constructor( private channelService: EmployeeTaskService ) {
        this.connectionState$ = this.channelService.isReady.map((state: ConnectionState) => { return ConnectionState[state]; });
        this.channelService.error.subscribe(
            (error: any) => { console.warn(error); },
            (error: any) => { console.error("errors$ error", error); }
        );
        this.channelService.isReady.subscribe(
            () => { console.log("signalr service has been started"); },
            () => { console.warn("signalr service failed to start!"); }
        );
    }

    ngOnInit() {
        console.log("Starting the channel service");
        this.channelService.start();
    }
}
