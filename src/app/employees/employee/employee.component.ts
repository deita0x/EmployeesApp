import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    const id = form.value.id;

    if (id) {
      this.updateEmployee(form);
    } else {
      this.saveEmployee(form);
    }
  }

  saveEmployee(form: NgForm) {
    this.employeeService.save(form.value).subscribe(
      response => {
        this.resetForm(form);
        this.toastrService.showToast({
          text: 'Save successfully.',
          className: 'info'
        });
        this.employeeService.get();
      }
    );
  }

  updateEmployee(form: NgForm) {
    this.employeeService.update(form.value).subscribe(
      response => {
        this.resetForm(form);
        this.toastrService.showToast({
          text: 'Update successfully.',
          className: 'info'
        });
        this.employeeService.get();
      }
    );
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
    } else {
      this.employeeService.employee = {
        id: null, fullName: '', code: '', phone: '', position: ''
      };
    }
  }
}
