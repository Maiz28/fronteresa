import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platillo } from '../models/pedido';

@Injectable({
  providedIn: 'root',
})
export class PlatillosService {
  URL_API = 'https://back-end-h5qk.onrender.com/api/employees';

  selectedPlatillo: Platillo = {
    id: 0,
    nombre_del_platillo: '',
    descripcion_del_platillo: '',
    precio: 0,
    categoria: '',
    cantidad: 0,
  };

  platillos: Platillo[] = [];
  constructor(private http: HttpClient) {}

  getPlatillo() {
    return this.http.get<Platillo[]>(this.URL_API);
  }

  createPlatillo(platillo: Platillo) {
    return this.http.post(this.URL_API, platillo);
  }

  deletePlatillo(id: number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
