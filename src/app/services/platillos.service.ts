import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platillo } from '../models/pedido';

@Injectable({
  providedIn: 'root',
})
export class PlatillosService {
  URL_API = 'http://Localhost:4000/api/employees';

  constructor(private http: HttpClient) {}

  getPlatillo() {
    return this.http.get<Platillo[]>(this.URL_API);
  }
}
