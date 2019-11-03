import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  readonly url = 'https://localhost:44306/api/employees';
  formData: Employee;
  postEmployee(formData: Employee) {
    return this.http.post(this.url, formData);
  }
}
