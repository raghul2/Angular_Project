import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  fname: string = '';

  setFname(value: string) {
    this.fname = value;
  }

  constructor() { }
}
