import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeedataserviceService } from '../service/employeedataservice.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
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
        this.employees = data.filter((employee: any)=>employee.ClaimStatus === 'Approved');
      });
  }
  
}
