import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/Login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  URL_API = ' http://localhost:4000/api/user';
  constructor(public http: HttpClient) {}

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.URL_API}/login`, data);
  }
}
