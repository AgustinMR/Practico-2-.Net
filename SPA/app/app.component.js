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
var employee_task_service_1 = require("./employee/employee.task.service");
var AppComponent = (function () {
    function AppComponent(channelService) {
        this.channelService = channelService;
        this.showTable = false;
        this.showOtro = false;
        this.connectionState$ = this.channelService.isReady.map(function (state) { return employee_task_service_1.ConnectionState[state]; });
        this.channelService.error.subscribe(function (error) { console.warn(error); }, function (error) { console.error("errors$ error", error); });
        this.channelService.isReady.subscribe(function () { console.log("signalr service has been started"); }, function () { console.warn("signalr service failed to start!"); });
    }
    AppComponent.prototype.toggleShowTable = function () {
        this.showTable = true;
        this.showOtro = false;
    };
    AppComponent.prototype.toggleShowOtro = function () {
        this.showOtro = true;
        this.showTable = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("Starting the channel service");
        this.channelService.start();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'tsi1',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [employee_task_service_1.EmployeeTaskService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map