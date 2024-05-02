import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservacionesService } from 'src/app/services/reservaciones.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  errorMessage: string = '';
  successMessage: string = '';
  breadcrumbs = [
    { label: 'Inicio', url: '' },
    { label: 'Reservación', url: 'pedido' }
  ];

  constructor( public reservacionesService:ReservacionesService,  ) { }
  ngOnInit(): void {
  }


  addReservacion(form: NgForm) {
    const usuarioString = localStorage.getItem('usuario');
    if (!usuarioString) {
      console.error('No se encontró el usuario en el localStorage.');
      return;
    }

    const usuario = JSON.parse(usuarioString);
    const idUsuario = usuario.id;

    form.value.id_usuario = idUsuario; // Asignar el id_usuario al objeto de reservación

    this.reservacionesService.createReservacion(form.value).subscribe(
      res => {
        console.log(res);
        // Limpiar el mensaje de error si se pudo crear la reservación correctamente
        this.errorMessage = '';
        // Mostrar mensaje de éxito
        this.successMessage = '¡Reservación realizada con éxito!';
        // Limpiar mensaje de éxito después de 3 segundos
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
        // Limpiar el formulario después de guardar la reservación
        form.resetForm();
      },
      err => {
        console.error(err);
        // Verificar si el error es específico de tener ya 3 reservaciones para la misma fecha
        if (err.error && err.error.error === 'Ya hay 3 reservaciones para esta fecha.') {
          // Mostrar un mensaje de error al usuario
          this.errorMessage = 'Ya hay 3 reservaciones para esta fecha. Por favor, elija otra fecha.';
        } else {
          // Manejar otros errores
          this.errorMessage = 'Error al crear la reservación. Por favor, elije uan fecha valida.';
        }
      }
    );
  }

}
