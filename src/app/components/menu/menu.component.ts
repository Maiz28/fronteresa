import { Component, OnInit } from '@angular/core';
import { PlatillosService } from 'src/app/services/platillos.service';
import { Platillo } from '../../models/pedido';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  breadcrumbs = [
    { label: 'Inicio', url: '' },
    { label: 'Menú', url: 'menu' }
  ];


  constructor(public platillosService:PlatillosService) { }

  ngOnInit(): void {
  this.getPlatillos();
  }

  getPlatillos(){
    this.platillosService.getPlatillo().subscribe(
      res => {
        this.platillosService.platillos=res;
      },
      err => console.error(err)
    )
  }

  deletePlatillos(id:number){
  if (confirm('Seguro que quieres borrarlo ')){
    this.platillosService.deletePlatillo(id).subscribe(
    (res)=>{
      this.getPlatillos();
    }, 
    (err) => console.error(err))
  }
  }

  editPlatillos(platillo:Platillo){
    this.platillosService.selectedPlatillo =platillo;
  }
}
