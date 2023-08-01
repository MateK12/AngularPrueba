import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  @Input() tareaEditandosee: Tarea; //con @Input() nombreAtributo:tipo podemos recivir props enviado del padre

  nombreTareaEditar = " ";
  tareaEditar = null
  constructor() { }
  ngOnInit(): void {

  }
  editar(newnombre: string): void {
    this.tareaEditandosee.nombre = newnombre;
  }
  agregarTarea() {

  }
}
