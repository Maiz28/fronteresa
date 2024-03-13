import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  URL_API = 'http://localhost:4000/api/pedido'

pedidos: Pedido[]=[];
  constructor( private http: HttpClient) { }

getPedido(){
  return this.http.get<Pedido[]>(this.URL_API); 
}

}
