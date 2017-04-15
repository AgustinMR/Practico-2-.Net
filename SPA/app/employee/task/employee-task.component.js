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
require("rxjs/add/operator/toPromise");
var employee_task_service_1 = require("../employee.task.service");
var EmployeeTaskCompontent = (function () {
    function EmployeeTaskCompontent(http, channelService) {
        this.http = http;
        this.channelService = channelService;
    }
    EmployeeTaskCompontent.prototype.ngOnInit = function () {
        // Get an observable for events emitted on this channel
        //
        this.channelService.sub(this.channel).subscribe(function (x) {
            alert();
            console.log(x);
        }, function (error) {
            console.warn("Attempt to join channel failed!", error);
        });
        this.callApi();
    };
    EmployeeTaskCompontent.prototype.callApi = function () {
        this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (message) { console.log(message); }, function (error) { return console.log("Ha ocurrido un error, y fue culpa de git. :/"); }, function () { return console.log("Sha la la, Sha la la"); });
    };
    return EmployeeTaskCompontent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EmployeeTaskCompontent.prototype, "apiUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EmployeeTaskCompontent.prototype, "channel", void 0);
EmployeeTaskCompontent = __decorate([
    core_1.Component({
        selector: 'tsi1-employee-task',
        templateUrl: 'employee-task.component.html',
        styleUrls: ['employee-task.component.css'],
        moduleId: module.id,
        providers: [employee_task_service_1.EmployeeTaskService]
    }),
    __metadata("design:paramtypes", [http_1.Http, employee_task_service_1.EmployeeTaskService])
], EmployeeTaskCompontent);
exports.EmployeeTaskCompontent = EmployeeTaskCompontent;
//# sourceMappingURL=employee-task.component.js.map