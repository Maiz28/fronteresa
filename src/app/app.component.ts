import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isScrolled: boolean = false;
  tiempoInicioSesion: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.iniciarAlerta();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  mostrarAlerta() {
    let tiempoActual = Date.now();
    let tiempoTranscurrido = tiempoActual - this.tiempoInicioSesion;
    let tiempoAlerta = 60 * 60 * 1000; // 2 minutos en milisegundos
    if (tiempoTranscurrido >= tiempoAlerta) {
      let confirmacion = confirm('¿Quieres cerrar sesión?');
      if (confirmacion) {
        this.logout();
      }
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  iniciarAlerta() {
    let tiempoAlerta: number = 2 * 60 * 1000; // 2 minutos en milisegundos
    setInterval(() => this.mostrarAlerta(), tiempoAlerta);
  }
}
