import { Component } from '@angular/core';

@Component({
    selector: 'tsi1',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id
})
export class AppComponent {

    showTable = false;
    showOtro = false;

    constructor() { }

    toggleShowTable() {
        this.showTable = true;
        this.showOtro = false;
    }

    toggleShowOtro() {
        this.showOtro = true;
        this.showTable = false;
    }


}
