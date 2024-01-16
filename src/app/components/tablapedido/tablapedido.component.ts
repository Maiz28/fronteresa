import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompletoService } from 'src/app/services/completo.service';

@Component({
  selector: 'app-tablapedido',
  templateUrl: './tablapedido.component.html',
  styleUrls: ['./tablapedido.component.css'],
})
export class TablapedidoComponent implements OnInit {
  constructor(public completoService: CompletoService) {}

  ngOnInit(): void {
    this.getCompleto();
  }

  getCompleto() {
    this.completoService.getCompleto().subscribe((res) => {
      this.completoService.completo = res;
      console.log(res);
    });
  }
}
