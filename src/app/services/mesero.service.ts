import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mesero } from '../models/Mesero';

@Injectable({
  providedIn: 'root',
})
export class MeseroService {
  URL_API = 'http://Localhost:4000/api/meseros  ';

  constructor(public http: HttpClient) {}

  mesero!: mesero[];

  getmesero() {
    return this.http.get<mesero[]>(this.URL_API);
  }
}
