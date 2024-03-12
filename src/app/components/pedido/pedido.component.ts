import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';



@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {


  constructor( public pedidoService:PedidoService) { }

  ngOnInit(): void {
   this.getPedido();
  }

 getPedido(){
  this.pedidoService.getPedido().subscribe(
    res => {
      this.pedidoService.pedidos = res;
    },
    err => console.error(err)
  )
 }


}


