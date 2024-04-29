import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-rest-contra',
  templateUrl: './rest-contra.component.html',
  styleUrls: ['./rest-contra.component.css']
})
export class RestcontraComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  resetPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    token: ['', Validators.required],
    newPassword: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  resetPassword() {
    const { email, token, newPassword } = this.resetPasswordForm.value;

    this.loginService.resetPassword({ email, token, newPassword }).subscribe(
      (resp) => {
        Swal.fire({
          title: 'Restablecer Contraseña',
          text: resp.message,
          icon: 'success',
          backdrop: false,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
      (err) => {
        Swal.fire({
          title: 'Restablecer Contraseña',
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