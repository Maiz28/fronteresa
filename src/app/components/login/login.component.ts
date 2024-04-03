import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email: string | undefined;
  public password: string | undefined;
  hide = true;

  constructor(public loginService: LoginService) {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void {
    this.loginService.postUsuario().subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  errorMessage: string = '';

  updateErrorMessage() {
    if (this.emailFormControl.errors && this.emailFormControl.errors['required']) {
      this.errorMessage = 'You must enter a value';
    } else if (this.emailFormControl.errors && this.emailFormControl.errors['email']) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
}
