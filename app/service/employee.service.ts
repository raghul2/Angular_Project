/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient : HttpClient ) { }

  baseurl="http://localhost:5156/api/Details";

  GetEmployee() : Observable<employee[]>{
    return this.httpclient.get<employee[]>(this.baseurl)
  }

 

  CreateEmployee(emp : employee):Observable<employee>{
    emp.Id="0000";
    emp.Status="Pending"
    return this.httpclient.post<employee>(this.baseurl,emp);
  }
}
*/