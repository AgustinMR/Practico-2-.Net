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
        this.callApi();
        /*this.channelService.sub(this.channel).subscribe(
            (x: EventMessage) => {
                alert();
                switch (x.ChannelName) {
                    case this.eventName: { this.showNotification(); }; break;
                }
            },
            (error: any) => {
                console.warn("Error al unirse al canal!", error);
            }
        )*/

        this.channelService.sub(this.channel).subscribe(
            response => alert(response.Json),
            (error: Response) => console.log("Ha ocurrido un error. {error}", error.json()),
            () => alert("Sub method completed")
        );
    }

    callApi() {
        this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .subscribe((message: string) => { console.log(message); }, error => console.log("Ha ocurrido un error... {error}", error), () => console.log("callApi Method completed."));
    }

    showNotification() {
        this.hayEvento = true;
        setTimeout(() => { this.hayEvento = false; }, 300);
    }

}