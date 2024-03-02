import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})


export class LoginComponent implements OnInit {
  public email:string | undefined;
  public password:string | undefined;

  constructor( ) {
   }

   login(){
    console.log(this.email);
    console.log(this.password);
   }

  ngOnInit(): void {
  }

}
