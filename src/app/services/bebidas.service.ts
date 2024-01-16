import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bebida } from '../models/Comanda';

@Injectable({
  providedIn: 'root',
})
export class BebidasService {
  URL_API = 'http://localhost:4000/api/bebidas';

  constructor(private http: HttpClient) {}

  getBebida() {
    return this.http.get<Bebida[]>(this.URL_API);
  }
}
