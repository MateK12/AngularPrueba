import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListUsuariosComponent } from './dashboard/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TareasComponent } from './dashboard/tareas/tareas.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { Alerta } from './alertar.service';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { CartaComponent } from './carta/carta.component';
import { CitasComponent } from './citas/citas.component';
import { ListCitasComponent } from './citas/components/list-citas/list-citas.component';
import { AddCitasComponent } from './citas/components/add-citas/add-citas.component';
import { ObservablesComponent } from './observables/observables.component';
import { EmisorComponent } from './observables/components/emisor/emisor.component';
import { ReceptorComponent } from './observables/components/receptor/receptor.component';
import { LlamarAPIComponent } from './llamar-api/llamar-api.component';
//importo los modulos, cada ng zorro tiene distintos modulos
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListUsuariosComponent,
    LayoutComponent,
    TareasComponent,
    CalculadoraComponent,
    ModificarDatosComponent,
    CartaComponent,
    CitasComponent,
    ListCitasComponent,
    AddCitasComponent,
    ObservablesComponent,
    EmisorComponent,
    ReceptorComponent,
    LlamarAPIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzFormModule,
    NzModalModule,
    NzSelectModule,
    NzButtonModule,
    ReactiveFormsModule,
    HttpClientModule
    //cada vez que quiera agregar un modulo, lo pongo aca


  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }, Alerta //cada vez que cree un servicio añadirlo como elemento en este array
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
