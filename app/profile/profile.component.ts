import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employeemodel';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  loggedInUser: string | null = null;
  public empy:employee={} as employee;
  myemployee:any;
  constructor(private employeeservice:MyserviceService) {

  }


  ngOnInit(): void {
   this.loggedInUser = localStorage.getItem('loggedInUser');
   this.getmyuser();
  }
  getmyuser() {
    this.employeeservice.getuser().subscribe(res => {
      this.myemployee = (res as employee[]).filter((employee: employee) => employee.ename === this.loggedInUser);
      console.log(res);
    });
  }
  
}
