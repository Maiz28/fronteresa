import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from 'src/app/models/ItemCarrito.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listaItemsCarrito: ItemCarrito[] = [];

  constructor() { }

  ngOnInit(): void {
    let carritostorage = localStorage.getItem("carrito");
    if (carritostorage) {
      this.listaItemsCarrito = JSON.parse(carritostorage) as ItemCarrito[];
    }
  }

}
