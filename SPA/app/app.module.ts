import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { ManageEmployeeComponent } from './employee/manage/manage-employee.component';
import { EmployeeService } from './employee/employee.service';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, HttpModule], // imports all the modules you will use in your main module
    declarations: [AppComponent, EmployeeListComponent, ManageEmployeeComponent], // declare the componentes that will be part of the modules
    providers: [EmployeeService, HttpModule], //declare the services you will have available for all componentes in your module
    bootstrap: [AppComponent]
})
export class AppModule { }
