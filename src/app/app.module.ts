import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MapaComponent } from './components/mapa/mapa.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SearchComponent } from './components/search/search.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TerminosComponent } from './components/terminos/terminos.component';



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
    PedidoComponent,
    MapaComponent,
    HeaderComponent,
    CartComponent,
    PoliticasComponent,
    SearchComponent,
    ResetPasswordComponent,
    TerminosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
