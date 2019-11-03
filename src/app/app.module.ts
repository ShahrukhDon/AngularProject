import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { PencilComponent } from './pencil/pencil.component';
import { WorkoutComponent } from './workout/workout.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';

const approutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'pencil' , component: PencilComponent },
  { path: 'workout' , component: WorkoutComponent },
  { path: 'employee' , component: EmployeesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    PagenotfoundComponent,
    PencilComponent,
    WorkoutComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
