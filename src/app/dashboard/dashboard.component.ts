import { Component, ElementRef, ViewChild } from '@angular/core';
import { Tarea } from '../models/tarea';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Route, Router } from '@angular/router';
import { Alerta } from '../alertar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listTareas: Tarea[] = [new Tarea("delete me", false)];
  nombreTarea = " ";
  tareaEditandose = 0;
  enedicion = 0

  @ViewChild('nuevonombre') viewchildinput: ElementRef
  constructor(private router: Router, private alertar: Alerta) { //en los argumentos del contructor le mando private instancia:NombreServicio

    console.log("fdsdf" + this.viewchildinput);
    setTimeout(() => {
      this.listTareas = []
    }, 1)
  }
  ngOnInit(): void {

  }
  agregarTarea() {
    console.log(this.nombreTarea);
    const Tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    this.listTareas.push(Tarea);

    console.log(this.listTareas);

    this.alertar.sumarTarea()
    this.alertar.Alertar(this.nombreTarea) //puedo llamar a la instancia en cualquier parte del componente, y usar sus metodos
    this.nombreTarea = " ";
  }
  eliminarTarea(id: number): void {
    this.listTareas.splice(id, 1);
  }
  actualizarTarea(id: number, tarea: Tarea) {
    this.listTareas[id].estado = !tarea.estado
  }
  editarTarea(id: number, tarea: Tarea): void {
    this.enedicion = id
    console.log(this.enedicion);
  }
  ircalculadora(): void {
    this.router.navigate(['/calculadora'])
  }
  irAppCitas(): void {
    this.router.navigate(["/appcitas"])
  }
  irObservables(): void {
    this.router.navigate(["/observables"])
  }
  irLlamarApi(): void {
    this.router.navigate(["/llamarApi"])
  }
}
