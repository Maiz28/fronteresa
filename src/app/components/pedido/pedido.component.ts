import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservacionService } from 'src/app/services/reservacion.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  breadcrumbs = [
    { label: 'Inicio', url: '' },
    { label: 'Reservación', url: 'pedido' }
  ];

  constructor( public reservacionService:ReservacionService ) { }

  ngOnInit(): void {
  }

  addPedido( form:NgForm){
    this.reservacionService.createPedido(form.value).subscribe(
      res =>console.log(res), 
      err =>console.error(err)
    )
  }

}
