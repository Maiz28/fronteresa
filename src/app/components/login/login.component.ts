import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/Login.model';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;

  constructor(
    public loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

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
        Swal.fire({
          title: 'Inicio de sesión',
          text: resp.message,
          icon: 'success',
          backdrop: false,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          this.router.navigate(['']);
          this.loginService.setUser(resp.user);
          localStorage.setItem('usuario', JSON.stringify(resp.user));
        });
      },
      (err) => {
        Swal.fire({
          title: 'Inicio de sesión',
          text: err.error.message,
          icon: 'error',
          backdrop: false,
          timer: 2000,
          showConfirmButton: false,
        });
      }
    );
  }
}
