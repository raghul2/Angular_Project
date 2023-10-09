import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employeemodel';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';


interface gender {
  value:string;
  viewvalue:string;

}

interface userposition {
  value:string;
  viewvalue:string;

}

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  public empy:employee={} as employee;
  usergender:gender[]=[
 
    {value:"Male",viewvalue:'Male'},
    {value:"Female",viewvalue:'Female'}

]

position:userposition[]=[
 
  {value:"Developer",viewvalue:'Developer'},
  {value:"Testing",viewvalue:'Testing'},
  {value:"HR",viewvalue:'HR'}

]
  constructor(private employeeservice:MyserviceService,private router:Router){ 

  }
ngOnInit(): void {
 
}

add(){
  this.employeeservice.createuser(this.empy).subscribe((data:employee)=>{
    console.log(data)
    alert("data added successfully")
  this.router.navigate(['/viewemp'])
  },
  err=>{
    alert("something went wrong")
    this.router.navigate(['/'])
  }
  )
}

  
}
