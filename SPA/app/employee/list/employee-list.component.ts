import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'tsi1-employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.css'],
    moduleId: module.id,
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

    employees: any;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees() {
        this.employeeService.getEmployees().subscribe(
            (data: Response) => this.employees = data,
            responseError => console.log(responseError),
            () => console.log("Employee Fetching operation completed")
        );
    }
}
