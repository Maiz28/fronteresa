import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: string | undefined; 
  public password: string | undefined;
  public confirmPassword: string | undefined;

  constructor() { }

  register(){
    console.log(this.email); 
    console.log(this.password)
  }

  ngOnInit(): void {
  }

}
