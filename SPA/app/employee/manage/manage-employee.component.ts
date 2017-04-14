import { Component, OnInit, NgModule } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'tsi1-employee-manage',
    templateUrl: 'manage-employee.component.html',
    styleUrls: ['manage-employee.component.css'],
    moduleId: module.id,
    providers: [EmployeeService]
})
export class ManageEmployeeComponent implements OnInit {

    isFullTime = true;

    Name = "";
    StartDate = "";
    Salary = "";
    HourlyRate = "";

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {

    }

    AddEmployee() {
        if (this.isFullTime) {
            this.employeeService.addEmployee(this.Name, this.StartDate, this.Salary, "", this.isFullTime).subscribe(
                response => console.log(response),
                error => console.log(error));
        }
        else {
            this.employeeService.addEmployee(this.Name, this.StartDate, "", this.HourlyRate, this.isFullTime).subscribe(
                response => console.log(response),
                error => console.log(error));
        }
    }

    changeCurrentEmployeeType() {
        if (this.isFullTime) {
            this.isFullTime = false;
        }
        else{
            this.isFullTime = true;
        }
    }

}
