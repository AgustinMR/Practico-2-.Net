import { OnInit, Input, Component } from "@angular/core";
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { EmployeeTaskService, EventMessage } from "../employee.task.service";

@Component({
    selector: 'tsi1-task-new-employee',
    templateUrl: 'employee-task-new-employee.component.html',
    styleUrls: ['employee-task-new-employee.component.css'],
    moduleId: module.id,
    providers: [EmployeeTaskService]
})
export class EmployeeTaskNewEmployeeCompontent implements OnInit {
    @Input() apiUrl: string;
    @Input() channel: string;
     
    constructor( private http: Http, private channelService: EmployeeTaskService ) { }

    ngOnInit() {
        // Get an observable for events emitted on this channel
        //
        this.channelService.sub(this.channel).subscribe(
            (x: EventMessage) => {
                alert();
                console.log(x);
            },
            (error: any) => {
                console.warn("Attempt to join channel failed!", error);
            }
        )
        this.callApi();
    }

    callApi() {
        this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .subscribe((message: string) => { console.log(message); });
    }

    hayEvento = false;

    showNotification() {
        this.hayEvento = true;
        
        this.hayEvento = false;
    }

}