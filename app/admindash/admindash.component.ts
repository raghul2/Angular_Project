import { Component, OnInit } from '@angular/core';
//import { employee } from '../model/employee';
import { SharedService } from '../service/shared.service';
//import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  fname: string = '';
  loggedInUser: string | null = null;
 

  constructor(/*private empserve: EmployeeService,*/ private sharedService: SharedService) {
    this.fname = sharedService.fname;
  }
  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    
  }

  

}