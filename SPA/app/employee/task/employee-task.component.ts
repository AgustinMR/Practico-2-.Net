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
     
    constructor( private http: Http, private channelService: EmployeeTaskService ) { }

    ngOnInit() {
        // Get an observable for events emitted on this channel
        //
        this.channelService.sub(this.channel).subscribe(
            (x: EventMessage) => {
                console.log(x);
            },
            (error: any) => {
                console.warn("Attempt to join channel failed!", error);
            }
        )
    }

    callApi() {
        this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .subscribe((message: string) => { console.log(message); }, error => console.log("Ha ocurrido un error, y fue culpa de git. :/"), () => console.log("Sha la la, Sha la la"));
    }
}