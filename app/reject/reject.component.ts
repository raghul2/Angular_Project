import { Component, OnInit } from '@angular/core';
import { EmployeedataserviceService } from '../service/employeedataservice.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {
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
        this.employees = data.filter((employee: any)=>employee.ClaimStatus === 'Rejected');
      });
  }
  
}
