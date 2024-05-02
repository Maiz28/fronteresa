import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { ReservacionesService } from 'src/app/services/reservaciones.service';

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


  constructor( public reservacionesService:ReservacionesService ) { }

  ngOnInit(): void {
    this.getReservacion();
    
  }

  getReservacion(){
    this.reservacionesService.getReservaciones().subscribe(
      res => {
        this.reservacionesService.reservacion =res;
      },
      err => console.error(err)
    )
  }

  

}
