import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-citas',
  templateUrl: './add-citas.component.html',
  styleUrls: ['./add-citas.component.css']
})
export class AddCitasComponent {
  @Output() newAppointment = new EventEmitter<any>(); //Con esto puedo enviar datos al padre, new appointment es un emisor de eventos.
  //@Output nombre emisor evento = new EventEmmiter<any>; creo solo un emisor de eventos, NO envio ningun dato

  constructor() { }

  myform = new FormGroup({
    name: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    syntoms: new FormControl("", Validators.required)
  });
  HandleClick() {
    let appointment = this.myform.getRawValue();
    console.log(this.myform.getRawValue());
    this.newAppointment.emit(appointment); //emite datos hacia el padre
    //EventEmitter.emit(datos_A_Emitir)
  }
}
