import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
  @Input() listAppointment: any //Crea una variable que va a recivir datos desde el padre
  //puedo manipularla desde aca o desde el HTML

  @Output() deleteAppointmentEM = new EventEmitter()
  appointmentList = [];

  deleteAppointment(index: any) {
    this.deleteAppointmentEM.emit(index);
  }
}
