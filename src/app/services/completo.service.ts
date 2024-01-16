import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Completo } from '../models/orden';

@Injectable({
  providedIn: 'root',
})
export class CompletoService {
  URL_API = 'http://Localhost:4000/api/completo';

  completo!: Completo[];

  constructor(private http: HttpClient) {}

  getCompleto() {
    return this.http.get<Completo[]>(this.URL_API);
  }
}
