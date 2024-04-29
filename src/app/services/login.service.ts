import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ResetPasswordRequest, ResetPasswordResponse, UserResponse } from '../models/Login.model';

import { Usuario } from '../models/Mesero';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userSubject: BehaviorSubject<UserResponse | null> =
    new BehaviorSubject<UserResponse | null>(null);
  public user$: Observable<UserResponse | null> =
    this.userSubject.asObservable();

  URL_API = ' http://localhost:4000/api/user';

  constructor(public http: HttpClient) {}

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.URL_API}/login`, data);
  }

  register(data: RegisterRequest) {
    return this.http.post    <RegisterResponse>(`${this.URL_API}/register`, data);
  }

  requestPasswordReset(email: string) {
    return this.http.post(`${this.URL_API}/request-password-reset`, { email });
  }

  resetPassword(data: ResetPasswordRequest) {
    return this.http.put<ResetPasswordResponse>(`${this.URL_API}/reset-password`, data);
  }

  setUser(user: UserResponse | null) {
    this.userSubject.next(user);
  }
}
