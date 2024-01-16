import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ultima } from '../models/Mesero';

@Injectable({
  providedIn: 'root',
})
export class UltimaService {
  URL_API = 'http://Localhost:4000/api/ultima  ';

  constructor(public http: HttpClient) {}

  getultima() {
    return this.http.get<ultima[]>(this.URL_API);
  }
}
