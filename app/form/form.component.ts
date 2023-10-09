import { Component, OnInit } from '@angular/core';
//import { employee } from '../model/employee';
//import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loggedInUser: string | null = null;
  modalTitle: string | undefined;
  

  constructor(private http: HttpClient,private _route:Router) {}

  employees: any = [];
  Id = 0;
  EmpName = "";
  Email = "";
  PhoneNumber = "";
  ExpenseType = "";
  ClaimDate = "";
  Amount = "";
  Currency = "";
  DescribeNote = "";
  PhotoFileName = "";
  PhotoPath = environment.PHOTO_URL;
  ClaimStatus = "Pending";

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.refreshList();
  }

  refreshList() {
    this.http.get<any>(environment.API_URL + 'employee')
      .subscribe(data => {
        this.employees = data;
      });
  }
  addClick() {
    this.modalTitle = "Add Employee";
    this.Id = 0;
    this.EmpName = "";
    this.Email = "";
    this.PhoneNumber = "";
    this.ExpenseType = "";
    this.ClaimDate = "";
    this.Amount = "";
    this.Currency = "";
    this.DescribeNote = "";
    this.PhotoFileName = "";
    this.ClaimStatus = "Pending";
  }
  createClick() {
    var val = {
      EmpName: this.EmpName,
      Email: this.Email,
      PhoneNumber: this.PhoneNumber,
      ExpenseType: this.ExpenseType,
      ClaimDate: this.ClaimDate,
      Amount: this.Amount,
      Currency: this.Currency,
      DescribeNote: this.DescribeNote,
      PhotoFileName: this.PhotoFileName,
      ClaimStatus: this.ClaimStatus
    };

    this.http.post(environment.API_URL + 'employee', val)
      .subscribe(res => {
        alert(res.toString());
        this._route.navigate(['/dashboard']);
      });
  }

  imageUpload(event :any){
    var file=event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('file',file,file.name);

    this.http.post(environment.API_URL+'employee/savefile',formData)
    .subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
    });

  }
     
}