import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  listAppointments = []
  HandleCreation(appointment: any) {
    this.listAppointments.push(appointment)
    console.log(this.listAppointments);
  }
  HandleDeletion(index: any) {
    this.listAppointments.splice(index, 1);
    console.log(this.listAppointments);
  }
}
