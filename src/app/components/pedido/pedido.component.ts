import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {


  submitForm() {
    // Lógica para manejar el envío del formulario
  }
  formData: any = {}; 
  constructor() { }

  ngOnInit(): void {
  }

}


