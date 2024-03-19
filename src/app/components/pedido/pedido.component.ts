import { Component, OnInit } from '@angular/core';

import { ReservacionService } from 'src/app/services/reservacion.service';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  breadcrumbs = [
    { label: 'Inicio', url: '/' }
  ];

  constructor( public reservacionService:ReservacionService ) { }

  ngOnInit(): void {
  }

}


