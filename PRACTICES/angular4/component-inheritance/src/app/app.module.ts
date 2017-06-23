import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeTableComponent } from './employee-table.component';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeTableComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
