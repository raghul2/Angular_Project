import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employeemodel';
import { MyserviceService } from '../service/myservice.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';


interface gender {
  value:string;
  viewvalue:string;

}

interface userposition {
  value:string;
  viewvalue:string;

}

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit{

  public empy:employee={} as employee;
  public dataid:any;
  public mydata:any;
  usergender:gender[]=[
 
    {value:"Male",viewvalue:'Male'},
    {value:"Female",viewvalue:'Female'}

]

position:userposition[]=[
 
  {value:"Developer",viewvalue:'Developer'},
  {value:"Testing",viewvalue:'Testing'},
  {value:"HR",viewvalue:'HR'}

]



constructor(private employeeservice:MyserviceService,private Activatedroute:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    
    this.Activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']('dataid');
    })

    this.employeeservice.fetchdata(this.dataid).subscribe((data:any)=>{
    this.empy=data;
    //console.log(data);
    })
  }


  updatedata() {
    this.employeeservice.update(this.empy,this.dataid).subscribe((data:any)=>{
      alert('data updated succesfully!!!')
    this.router.navigate(['/viewemp'])
    })
  }

}
