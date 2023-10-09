import { Component, OnInit } from '@angular/core';
//import { EmployeeService } from '../service/employee.service';
import { SharedService } from '../service/shared.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { EmployeedataserviceService } from '../service/employeedataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  loggedInUser: string | null = null;
  modalTitle: string | undefined;

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private EmployeeDataService: EmployeedataserviceService
  ) {
    
  }

  employees: any[] = [];
  // Other properties...

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.employees = this.EmployeeDataService.employees;

    if (this.employees.length === 0) {
      this.refreshList();
    }
  }

  refreshList() {
    this.http.get<any>(environment.API_URL + 'employee')
      .subscribe(data => {
        this.employees = data.filter((employee: any) => employee.EmpName === this.loggedInUser);
        this.EmployeeDataService.employees = this.employees;
      });
  }
  
}
