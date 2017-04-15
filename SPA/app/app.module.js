"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var employee_list_component_1 = require("./employee/list/employee-list.component");
var manage_employee_component_1 = require("./employee/manage/manage-employee.component");
var employee_task_component_1 = require("./employee/task/employee-task.component");
var employee_service_1 = require("./employee/employee.service");
var employee_task_service_1 = require("./employee/employee.task.service");
var channelConfig = new employee_task_service_1.ChannelConfig();
channelConfig.url = "http://localhost:9123/signalr";
channelConfig.hubName = "EmployeeHub";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, common_1.CommonModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, employee_list_component_1.EmployeeListComponent, manage_employee_component_1.ManageEmployeeComponent, employee_task_component_1.EmployeeTaskCompontent],
        providers: [employee_service_1.EmployeeService, http_1.HttpModule, employee_task_service_1.EmployeeTaskService,
            { provide: employee_task_service_1.SignalrWindow, useValue: window },
            { provide: 'channel.config', useValue: channelConfig }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map