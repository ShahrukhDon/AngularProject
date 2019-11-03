import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if ( form != null) {
    form.resetForm();
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      EMPCode: '',
      Mobile: '',
      Position: ''
    };
    }
  }
  onSubmit(form: NgForm) {
    this.insertData(form);
  }
  insertData(form: NgForm) {

  }
}
