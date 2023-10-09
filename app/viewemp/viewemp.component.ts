import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employeemodel';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {
  public empy:employee={} as employee;
  myemployee:any;

  constructor(private employeeservice:MyserviceService) { }


  ngOnInit(): void {
   this.getmyuser();
  }
getmyuser(){
  this.employeeservice.getuser().subscribe(res=>{
   this.myemployee = res;
   console.log(res);
  })
}

deleteuser(user:any){
  if(confirm('Are you sure to delete?'))
  this.employeeservice.delete(user).subscribe(() =>{
    this.getmyuser();

  })
}
}
