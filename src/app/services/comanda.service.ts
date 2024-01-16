import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comanda } from '../models/Comanda';

@Injectable({
  providedIn: 'root',
})
export class ComandaService {
  URL_API = 'http://Localhost:4000/api/pedidos';

  selectedComanda: Comanda = {
    idComanda: 0,
    nombrecliente: '',
    alimentoconsumir: '',
    cantidad: 0,
    bebida: '',
    cantidadbebida: 0,
    status: '',
    tipopago: '',
    propina: '',
    correo: '',
  };

  comandas!: Comanda[];

  constructor(private http: HttpClient) {}

  getComandas() {
    return this.http.get<Comanda[]>(this.URL_API);
  }

  createComanda(comanda: Comanda) {
    return this.http.post(this.URL_API, comanda);
  }
  putComanda(comanda: Comanda) {
    return this.http.put(`${this.URL_API}/${comanda.idpedido}`, comanda);
  }

  deleteComanda(idpedido: number) {
    return this.http.delete(`${this.URL_API}/${idpedido}`);
  }
}
