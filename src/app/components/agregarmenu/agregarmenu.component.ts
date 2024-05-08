import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlatillosService } from 'src/app/services/platillos.service';


@Component({
  selector: 'app-agregarmenu',
  templateUrl: './agregarmenu.component.html',
  styleUrls: ['./agregarmenu.component.css']
})
export class AgregarmenuComponent implements OnInit {

  breadcrumbs = [
    { label: 'Inicio', url: '' },
    { label: 'Menú', url: 'menu' },
    { label: 'Agregar platillos', url: 'agregar-platillo' }
  ];


  constructor( public platillosService:PlatillosService) { }

  successMessage: string = '';

  ngOnInit(): void {
  }

  addPlatillo(form: NgForm) {
    this.platillosService.createPlatillo(form.value).subscribe(
      res => {
        console.log(res);
        form.resetForm();
        this.successMessage = '¡Platillo agregado correctamente!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      err => {
        console.error(err);
      }
    );
  }


}
