import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 
  private loggedInUserName: string = '';

  
  constructor() { }
}
