import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { Pedido } from 'src/app/models/pedido';
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {

  breadcrumbs = [
    { label: 'Inicio', url: '' },
    { label: 'Reservaciones', url: 'reservaciones' }
  ];


  constructor( public reservacionService:ReservacionService ) { }

  ngOnInit(): void {
    this.getPedido();
  }

  getPedido(){
    this.reservacionService.getPedido().subscribe(
      res => {
        this.reservacionService.pedidos=res;
      },
      err => console.error(err)
    )
  }

  

}
