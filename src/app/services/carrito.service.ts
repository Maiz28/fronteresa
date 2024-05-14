import { Injectable, OnInit } from '@angular/core';
import { ItemCarrito } from '../models/ItemCarrito.model';
import { Platillo } from '../models/pedido';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  //lista carrito
  private myList: Platillo[] = [];

  //carrito observable
  private myCart = new BehaviorSubject<Platillo[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() {
    this.viewLocalCart();
  }

  viewLocalCart() {
    if (localStorage.getItem('carrito') !== null) {
      this.myList = JSON.parse(localStorage.getItem('carrito')!);
      this.myCart.next(this.myList);
    }
  }

  addProduct(product: Platillo) {
    if (this.myList.length === 0) {
      product.cantidad = 1;
      this.myList.push(product);
      this.myCart.next(this.myList);
    } else {
      const productMod = this.myList.find((element) => {
        return element.id === product.id;
      });

      if (productMod) {
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList);
      } else {
        product.cantidad = 1;
        this.myList.push(product);
        this.myCart.next(this.myList);
      }
    }

    localStorage.setItem('carrito', JSON.stringify(this.myList));
  }

  findProductById(id: number) {
    return this.myList.find((element) => {
      return element.id === id;
    });
  }

  deleteProduct(id: number) {
    this.myList = this.myList.filter((product) => {
      return product.id != id;
    });
    this.myCart.next(this.myList);
  }

  deleteAllCart() {
    this.myList = [];
  }

  totalCart() {
    const total = this.myList.reduce(function (acc, product) {
      return acc + product.cantidad * product.precio;
    }, 0);
    return total;
  }
}
