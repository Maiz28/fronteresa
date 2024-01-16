import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandaComponent } from './components/comanda/comanda.component';
import { OrdenComponent } from './components/orden/orden.component';
import { TablapedidoComponent } from './components/tablapedido/tablapedido.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PagoComponent } from './components/pago/pago.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'pago', component: PagoComponent },
  { path: '', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
