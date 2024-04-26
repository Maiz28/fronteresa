import { Platillo } from './../../models/pedido';
import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { PlatillosService } from 'src/app/services/platillos.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserResponse } from 'src/app/models/Login.model';
import { ItemCarrito } from 'src/app/models/ItemCarrito.model';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  itemsCarrito: ItemCarrito[] = [];

  user: UserResponse | null = null;
  breadcrumbs = [
    { label: 'Inicio', url: '' },
    { label: 'Menú', url: 'menu' },
  ];

  constructor(
    public platillosService: PlatillosService,
    public router: Router,
    private loginService: LoginService,
    public carritoService:CarritoService
  ) {}

  ngOnInit(): void {
    this.getPlatillos();
    this.loginService.user$.subscribe((user) => {
      this.user = user;
    });

    if (this.user === null) {
      this.user = JSON.parse(localStorage.getItem('usuario')!);
    }
  }

  getPlatillos() {
    this.platillosService.getPlatillo().subscribe(
      (res) => {
        this.platillosService.platillos = res;
      },
      (err) => console.error(err)
    );
  }

  deletePlatillos(id: number) {
    if (confirm('Seguro que quieres borrarlo ')) {
      this.platillosService.deletePlatillo(id).subscribe(
        (res) => {
          this.getPlatillos();
        },
        (err) => console.error(err)
      );
    }
  }

  editPlatillos(platillo: Platillo) {
    this.platillosService.selectedPlatillo = platillo;
  }
  agregarPlatillo() {
    this.router.navigate(['/agregar-platillo']);
  }

  agregarCarrito(platillo: any) {
    const nuevoItemCarrito: ItemCarrito = {
      id: platillo.id,
      nombre: platillo.nombre, // Ajusta según la estructura real del objeto de platillo
      precio: platillo.precio, // Ajusta según la estructura real del objeto de platillo
      cantidad: 1
    };
    this.itemsCarrito.push(nuevoItemCarrito);
    this.carritoService.agregarAlCarrito(platillo);
    localStorage.setItem("carrito", JSON.stringify(nuevoItemCarrito))
    //console.log("Agregado al carrito:", platillo)
     
   
  }
}
