import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from './interfaces';

@Component({
  selector: 'app-employee',
  template: ''
})
export class EmployeeComponent {
    @Input() employees: IEmployee[] = [];
    @Output() select = new EventEmitter();

    heading = 'Employees';

    selectEmployee(employee: IEmployee) {
        this.select.emit(employee);
    }

}
