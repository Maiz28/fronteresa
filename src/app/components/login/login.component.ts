import { LoginService } from './../../services/login.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})


export class LoginComponent implements OnInit {
  public email:string | undefined;
  public password:string | undefined;

  constructor( public loginService:LoginService) {
   }

   login(){
    console.log(this.email);
    console.log(this.password);
   }

  ngOnInit(): void {
    this.loginService.postUsuario().subscribe(
      res => console.log(res),
      err => console.error(err)
    )

  }
}
