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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
/**
 * Service for notify and subscribe to events.
 */
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.addEmployee = function (Name, StartDate, Salary, HourlyRate, isFullTime) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (isFullTime) {
            return this.http.post("http://localhost:49222/api/employees/full?" + "Name=" + Name + "&StartDate=" + StartDate + "&Salary=" + Salary, {}, options).map(function (response) { return alert(response.json()); });
        }
        else {
            return this.http.post("http://localhost:49222/api/employees/part?" + "Name=" + Name + "&StartDate=" + StartDate + "&HourlyRate=" + HourlyRate, {}, options).map(function (response) { return response.json(); });
        }
    };
    EmployeeService.prototype.editEmployee = function () {
        console.log('edit employee');
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get("http://localhost:49222/api/employees").map(function (data) { return data.json(); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map