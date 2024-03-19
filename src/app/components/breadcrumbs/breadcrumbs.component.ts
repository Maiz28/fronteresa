import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs = [
    { label: 'Inicio', url: '/pedido' },
    { label: 'Productos', url: '/products' },
    { label: 'Detalles del producto', url: '/products/1' } // Ejemplo de ruta dinámica
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
