import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComandaComponent } from './components/comanda/comanda.component';
import { OrdenComponent } from './components/orden/orden.component';
import { TablapedidoComponent } from './components/tablapedido/tablapedido.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { RegistroComponent } from './components/registro/registro.component';
import { PagoComponent } from './components/pago/pago.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComandaComponent,
    OrdenComponent,
    TablapedidoComponent,
    RegistroComponent,
    PagoComponent,
    PedidosComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
