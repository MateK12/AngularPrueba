import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  listUsuarios: any = [
    {
      nombre: "Carlos",
      apellido: "Lucero",
      localidad: "El challao"
    },
    {
      nombre: "Romina",
      apellido: "Perez",
      localidad: "Lujan"
    },
    {
      nombre: "Domingo",
      apellido: "Vazquez",
      localidad: "Maipu"
    }
  ]
}
