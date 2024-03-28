import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginaerrorComponent } from './components/paginaerror/paginaerror.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { AgregarmenuComponent } from './components/agregarmenu/agregarmenu.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    PaginaerrorComponent,
    LoginComponent,
    RegisterComponent,
    AgregarmenuComponent,
    ReservacionComponent,
    BreadcrumbsComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    CommonModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
