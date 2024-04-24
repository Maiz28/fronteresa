import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;

  constructor(public loginService: LoginService, private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  errorMessage: string = '';

  login() {
    const data: LoginRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.loginService.login(data).subscribe(
      (resp) => {
        console.log(resp.message);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  updateErrorMessage() {
    if (this.loginForm.errors && this.loginForm.errors['required']) {
      this.errorMessage = 'You must enter a value';
    } else if (this.loginForm.errors && this.loginForm.errors['email']) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
}
