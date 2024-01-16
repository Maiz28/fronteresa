import { Component, OnInit } from '@angular/core';
import { CompletoService } from 'src/app/services/completo.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  constructor(public pedidoService: CompletoService) {}

  ngOnInit(): void {
    this.getCompleto();
  }

  getCompleto() {
    this.pedidoService.getCompleto().subscribe((res) => {
      this.pedidoService.completo = res;
      console.log(res);
    });
  }
}
