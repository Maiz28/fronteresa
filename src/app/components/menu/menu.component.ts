import { Component, OnInit } from '@angular/core';
import { PlatillosService } from 'src/app/services/platillos.service';
import { Platillo } from '../../models/pedido';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserResponse } from 'src/app/models/Login.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  item: any ;
  user: UserResponse | null = null;
  breadcrumbs = [
    { label: 'Inicio', url: '' },
    { label: 'Menú', url: 'menu' },
  ];

  constructor(
    public platillosService: PlatillosService,
    public router: Router,
    private loginService: LoginService
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

  agregarCarrito() {
    console.log("Agregado");
  }
}
