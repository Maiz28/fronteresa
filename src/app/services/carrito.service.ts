import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items: string[] = [];

  constructor() {}

  agregarAlCarrito(nombre_platillo: string) {
    this.items.push(nombre_platillo);
  }

  vaciarCarrito() {
    this.items = [];
  }

  obtenerItems() {
    return this.items;
  }
}
