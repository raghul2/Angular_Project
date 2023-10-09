import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  private _toast: any;
  //private _route: any;
  constructor( private _route:Router,private _http:HttpClient) {}
  register:FormGroup|any;
  signuser:any;
  loggedInUser: string | null = null;

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.register = new FormGroup({
      fname: new FormControl('', [Validators.required]),
    
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
      ]),
    });
  }

  registerdata(register:FormGroup){
    console.log(this.register.value);
    this.signuser = this.register.value.fname
    this._http.post<any>("http://localhost:3000/register" ,this.register.value)
    .subscribe(res=>{
      this._route.navigate(['/admindash']);
      this.register.reset();
      //this._toast.success(this.signuser, 'you are successfully signup');
      
      
      
  },err=>{
    alert('somthing went wrong');
  })
  
  }
  
  sbtn()
  {
    this._route.navigate(['login']);
   // $('.form-box').css('display','block');
   // $('.form-box1').css('display','none');
  }

}



