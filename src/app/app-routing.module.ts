import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { CartaComponent } from './carta/carta.component';
import { CitasComponent } from './citas/citas.component';
import { ObservablesComponent } from './observables/observables.component';
import { LlamarAPIComponent } from './llamar-api/llamar-api.component';

const routes: Routes = [
  { path: '', redirectTo: "layout", pathMatch: "full" },
  { path: 'layout', component: LayoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'appcitas', component: CitasComponent },
  { path: 'modificar', component: CartaComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'llamarApi', component: LlamarAPIComponent },
  { path: '**', redirectTo: "layout", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
