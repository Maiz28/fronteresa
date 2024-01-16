import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../models/orden';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  URL_API = 'http://Localhost:4000/api/comandas';

  selectedOrden: Orden = {
    numeromesa: 0,
    nombremesero: '',
  };

  ordenes!: Orden[];

  constructor(private http: HttpClient) {}

  getOrdenes() {
    return this.http.get<Orden[]>(this.URL_API);
  }

  createOrden(orden: Orden) {
    return this.http.post(this.URL_API, orden);
  }

  putOrden(orden: Orden) {
    return this.http.put(`${this.URL_API}/${orden.idcomanda}`, orden);
  }

  deleteOrden(idcomanda: number) {
    return this.http.delete(`${this.URL_API}/${idcomanda}`);
  }
}
