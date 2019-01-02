import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:3000/employees';
  employee: Employee;
  employees: Employee[];

  constructor(private http: HttpClient) { }

  get() {
    return this.http
      .get<Employee[]>(this.url)
      .subscribe(employees => this.employees = employees);
  }

  save(employee: Employee) {
    return this.http.post(this.url, employee);
  }

  update(employee: Employee) {
    return this.http.put(`${this.url}/${employee.id}`, employee);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
