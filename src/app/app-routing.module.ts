import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginaerrorComponent } from './components/paginaerror/paginaerror.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AgregarmenuComponent } from './components/agregarmenu/agregarmenu.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';

const routes: Routes = [
  { path: '', component:InicioComponent},
  {path: 'pedido', component:PedidoComponent },
  { path: 'menu', component:MenuComponent},
  { path: 'error', component: PaginaerrorComponent},
  { path: 'login', component: LoginComponent}, 
  { path: 'register', component: RegisterComponent},
  { path: 'platillonuevo', component: AgregarmenuComponent},
  { path: 'reservaciones', component: ReservacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule {}
