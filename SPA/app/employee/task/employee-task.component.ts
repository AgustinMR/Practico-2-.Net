import { OnInit, Input, Component } from "@angular/core";
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { EmployeeTaskService, EventMessage } from "../employee.task.service";

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
    eventName = "USUARIO_CONECTADO";
    hayEvento = false;
     
    constructor( private http: Http, private channelService: EmployeeTaskService ) { }

    ngOnInit() {

        this.channelService.sub(this.channel).subscribe(
            (x: EventMessage) => {
                alert();
                switch (x.ChannelName) {
                    case this.eventName: { this.showNotification(); }; break;
                }
            },
            (error: any) => {
                console.warn("Error al unirse al canal!", error);
            }
        )
    }

    callApi() {
        this.http.get(this.apiUrl)
            .map((res: Response) => res.json())

            .subscribe((message: string) => { console.log(message); });
    }

    showNotification() {
        this.hayEvento = true;
        alert();
        this.hayEvento = false;
    }

}