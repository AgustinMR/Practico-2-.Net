import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "rxjs/add/operator/map";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { ManageEmployeeComponent } from './employee/manage/manage-employee.component';
import { EmployeeTaskCompontent } from './employee/task/employee-task.component'
import { EmployeeTaskNewEmployeeCompontent } from './employee/task-new-employee/employee-task-new-employee.component'
import { EmployeeService } from './employee/employee.service';
import { EmployeeTaskService, ChannelConfig, SignalrWindow } from './employee/employee.task.service';

let channelConfig = new ChannelConfig();
channelConfig.url = "http://localhost:9123/signalr";
channelConfig.hubName = "EmployeeHub";

@NgModule({
    imports: [BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeListComponent, ManageEmployeeComponent, EmployeeTaskCompontent],
    providers: [EmployeeService, HttpModule, EmployeeTaskService,
        { provide: SignalrWindow, useValue: window },
        { provide: 'channel.config', useValue: channelConfig }],
    bootstrap: [AppComponent]
})
export class AppModule { }
