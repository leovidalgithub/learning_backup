import { Component } from '@angular/core';
import { IEmployee } from './interfaces';

const employees: IEmployee[] = [
  { id: 0, firstName: 'Luke', lastName: 'Skywalker', email: 'last_jedi@lukeskywalker.com' },
  { id: 1, firstName: 'Han', lastName: 'Solo', email: 'scoundrel@hansolo.com' },
  { id: 2, firstName: 'Leia', lastName: 'Organa', email: 'princess@leiaorgana.com' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    displayTable = true;
    employees = employees;
    selectedEmployee = employees[0];

    constructor() {}

    ngOnInit() {}

    selectEmployee(employee: IEmployee) {
        this.selectedEmployee = employee;
    }

}
