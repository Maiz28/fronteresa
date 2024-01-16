import { Component, OnInit } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { NgForm } from '@angular/forms';
import { error } from 'console';
import { Comanda } from 'src/app/models/Comanda';
import { UltimaService } from 'src/app/services/ultima.service';
import { ultima } from 'src/app/models/Mesero';
import { Platillo } from 'src/app/models/Comanda';
import { PlatillosService } from 'src/app/services/platillos.service';
import { BebidasService } from '../../services/bebidas.service';
import { Bebida } from 'src/app/models/Comanda';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css'],
})
export class PagoComponent implements OnInit {
  comandas: ultima[] = [];
  idsComandas: number[] = [];
  platillos: Platillo[] = [];
  bebidas: Bebida[] = [];

  constructor(
    public comandaService: ComandaService,
    public ultimaService: UltimaService,
    public platillosService: PlatillosService,
    public bebidasService: BebidasService
  ) {}

  ngOnInit(): void {
    this.getComandas();
    this.ultimaService.getultima().subscribe((data) => {
      this.comandas = data; // Aquí recibes las comandas desde tu servicio

      // Extraer solo los IDs de las comandas
      this.idsComandas = this.comandas.map((comanda) => comanda.idcomanda);
    });
    this.platillosService.getPlatillo().subscribe((data) => {
      this.platillos = data; // Almacena los platillos obtenidos desde tu servicio
    });
    this.bebidasService.getBebida().subscribe((data) => {
      this.bebidas = data; // Almacena los platillos obtenidos desde tu servicio
    });
  }
  resetForm(form: NgForm) {
    form.reset();
  }

  getComandas() {
    this.comandaService.getComandas().subscribe(
      (res) => {
        this.comandaService.comandas = res;
      },
      (err) => console.error(err)
    );
  }

  addComanda(form: NgForm) {
    if (form.value.idpedido) {
      this.comandaService.putComanda(form.value).subscribe(
        (res) => {
          this.getComandas();
          console.log(form.value);
          form.reset();
        },
        (err) => console.error(err)
      );
    } else {
      this.comandaService.createComanda(form.value).subscribe(
        (res) => {
          this.getComandas();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteComanda(id: number) {
    if (confirm('Estás seguro de querer eliminar la orden?')) {
      this.comandaService.deleteComanda(id).subscribe(
        () => {
          // Luego de borrar, actualiza la lista de comandas
          this.getComandas();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  editComanda(comanda: Comanda) {
    this.comandaService.selectedComanda = comanda;
  }
}
