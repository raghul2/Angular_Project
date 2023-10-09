import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }


  createuser(data:any){
    return this.http.post<any>("http://localhost:3000/Management",data)
    .pipe(map((data:any)=>{
      return data;
    }))

  }

  getuser(){
    return this.http.get("http://localhost:3000/Management")
  }

  delete(user:any){
    return this.http.delete("http://localhost:3000/Management/"+user.eid)
  }


  fetchdata(eid:number){
    return this.http.get<any>("http://localhost:3000/Management/"+eid)
  }

  update(data:any,eid:number){
    return this.http.put<any>("http://localhost:3000/Management/"+eid,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
