import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  modalTitle: string | undefined;

  constructor(private http: HttpClient) {}

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
  ClaimStatus = "pending";

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.http.get<any>(environment.API_URL + 'employee')
      .subscribe(data => {
        this.employees = data.filter((employee: any)=>employee.ClaimStatus === 'Pending');
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

  editClick(emp: any) {
    this.modalTitle = "Edit Reimbursement";
    this.Id = emp.Id;
    this.EmpName = emp.EmpName;
    this.Email = emp.Email;
    this.PhoneNumber = emp.PhoneNumber;
    this.ExpenseType = emp.ExpenseType;
    this.ClaimDate = emp.ClaimDate;
    this.Amount = emp.Amount;
    this.Currency = emp.Currency;
    this.DescribeNote = emp.DescribeNote;
    this.PhotoFileName = emp.PhotoFileName;
    this.ClaimStatus = emp.ClaimStatus;
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
        this.refreshList();
      });
  }

  updateClick() {
    var val = {
      Id: this.Id,
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

    this.http.put(environment.API_URL + 'employee', val)
      .subscribe(res => {
        alert(res.toString());
        this.refreshList();
      });
  }

  deleteClick(id: any) {
    if (confirm('Are you sure?')) {
      this.http.delete(environment.API_URL + 'employee/' + id)
        .subscribe(res => {
          alert(res.toString());
          this.refreshList();
        });
    }
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
