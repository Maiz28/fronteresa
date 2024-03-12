import { Usuario } from './../models/Mesero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_API=' http://localhost:4000/api/usuario'; 
  constructor( public http: HttpClient) { }

  postUsuario(){
      return this.http.get<Usuario[]>(this.URL_API);
  }
}
