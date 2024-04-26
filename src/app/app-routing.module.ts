import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginaerrorComponent } from './components/paginaerror/paginaerror.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AgregarmenuComponent } from './components/agregarmenu/agregarmenu.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'error', component: PaginaerrorComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'agregar-platillo',
    component: AgregarmenuComponent,
    pathMatch: 'full',
    data: { title: 'Agregar Platillo' },
  },
  { path: 'reservaciones', component: ReservacionComponent },
  { path: 'migas', component: BreadcrumbsComponent },
  { path: 'mapa', component: MapaComponent },
  { path: '**', component: PaginaerrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
