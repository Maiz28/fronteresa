import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para formularios de plantilla
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


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    PaginaerrorComponent,
    LoginComponent,
    RegisterComponent,
    AgregarmenuComponent,
    ReservacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Importa FormsModule aquí si estás utilizando formularios de plantilla
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
