import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  loggedInUser: string | null = null;
  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedInUser');
  }

}
