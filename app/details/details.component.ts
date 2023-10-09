import { Component, OnInit } from '@angular/core';
//import { EmployeeService } from '../service/employee.service';
//import { employee } from '../model/employee';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { EmployeedataserviceService } from '../service/employeedataservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  fname: string = '';
  loggedInUser: string | null = null;
  modalTitle: string | undefined;

  constructor(
    private http: HttpClient,
   
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
        this.employees = data;
      });
  }
  
}
