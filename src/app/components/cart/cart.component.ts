import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from 'src/app/models/ItemCarrito.model';
import { Platillo } from 'src/app/models/pedido';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  myCart$ = this.cartService.myCart$;

  constructor(private cartService: CarritoService) {}

  ngOnInit(): void {}

  updateUnits(operation: string, id: number) {
    const product = this.cartService.findProductById(id);
    if (product) {
      if (operation === 'minus' && product.cantidad > 0) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation === 'add') {
        product.cantidad = product.cantidad + 1;
      }
      if (product.cantidad === 0) {
        this.deleteProduct(id);
      }
    }
  }

  totalProduct(price: number, units: number) {
    return price * units;
  }

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id);
  }

  totalCart() {
    const result = this.cartService.totalCart();
    return result;
  }
}
