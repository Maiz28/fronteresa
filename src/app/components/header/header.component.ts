import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/models/Login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: UserResponse | null = null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.user$.subscribe((user) => {
      this.user = user;
    });

    if (this.user === null) {
      this.user = JSON.parse(localStorage.getItem('usuario')!);
    }
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
