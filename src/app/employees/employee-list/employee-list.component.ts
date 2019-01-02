import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'src/app/shared/toastr.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private service: EmployeeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.service.get();
  }

  deleteEmployee(employee: Employee) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.delete(employee.id).subscribe(
        response => {
          this.toastrService.showToast({
            text: 'Delete successfully.',
            className: 'danger'
          });
          this.service.get();
        }
      );
    }
    this.service.delete(employee.id);
  }

  populateForm(employee: Employee) {
    this.service.employee = Object.assign({}, employee);
  }
}
