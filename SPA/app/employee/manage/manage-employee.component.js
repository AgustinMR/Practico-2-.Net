"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("../employee.service");
require("rxjs/add/operator/toPromise");
var ManageEmployeeComponent = (function () {
    function ManageEmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.isFullTime = true;
        this.Name = "";
        this.StartDate = "";
        this.Salary = "";
        this.HourlyRate = "";
    }
    ManageEmployeeComponent.prototype.ngOnInit = function () {
    };
    ManageEmployeeComponent.prototype.AddEmployee = function () {
        if (this.isFullTime) {
            this.employeeService.addEmployee(this.Name, this.StartDate, this.Salary, "", this.isFullTime).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
        else {
            this.employeeService.addEmployee(this.Name, this.StartDate, "", this.HourlyRate, this.isFullTime).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
    };
    ManageEmployeeComponent.prototype.changeCurrentEmployeeType = function () {
        if (this.isFullTime) {
            this.isFullTime = false;
        }
        else {
            this.isFullTime = true;
        }
    };
    return ManageEmployeeComponent;
}());
ManageEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'tsi1-employee-manage',
        templateUrl: 'manage-employee.component.html',
        styleUrls: ['manage-employee.component.css'],
        moduleId: module.id,
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], ManageEmployeeComponent);
exports.ManageEmployeeComponent = ManageEmployeeComponent;
//# sourceMappingURL=manage-employee.component.js.map