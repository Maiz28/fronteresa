import { MeseroService } from './../../services/mesero.service';
import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { NgForm } from '@angular/forms';
import { error } from 'console';
import { Orden } from 'src/app/models/orden';
import { mesero } from '../../models/Mesero';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css'],
})
export class OrdenComponent implements OnInit {
  numerosDeMesa: number[] = [1, 2, 3, 4];
  nombres: mesero[] = [];

  constructor(
    public ordenService: OrdenService,
    public meseroService: MeseroService
  ) {}

  ngOnInit(): void {
    this.getOrdenes();
    this.meseroService.getmesero().subscribe((data) => {
      this.nombres = data;
    });
  }
  resetForm(form: NgForm) {
    form.reset();
  }

  getOrdenes() {
    this.ordenService.getOrdenes().subscribe(
      (res) => {
        this.ordenService.ordenes = res;
      },
      (err) => console.error(err)
    );
  }

  addOrden(form: NgForm) {
    if (form.value.idcomanda) {
      this.ordenService.putOrden(form.value).subscribe(
        (res) => {
          this.getOrdenes();
          form.reset();
        },
        (err) => console.error(err)
      );
    } else {
      this.ordenService.createOrden(form.value).subscribe(
        (res) => {
          this.getOrdenes();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteOrden(id: number) {
    if (confirm('Estás seguro de querer eliminar la comanda?')) {
      this.ordenService.deleteOrden(id).subscribe(
        () => {
          // Luego de borrar, actualiza la lista de comandas
          this.getOrdenes();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  editOrden(orden: Orden) {
    this.ordenService.selectedOrden = orden;
  }
}
