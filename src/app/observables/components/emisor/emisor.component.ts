import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent {
  private text$ = new Subject<any>(); //Defino un observable 
  //instanciando un Subject de tipo any (que es un tipo de observable)
  //generalmente van con un signo $ al fina;, para indicar que es un observable
  myform = new FormGroup({
    text: new FormControl("", Validators.required)
  })
  CaptureValue() {
    let arg = this.myform.getRawValue();
    this.text$.next(arg.text); //A esta variable/datos los hago parte del observable con .next()
  }
  getText() { //funcion para obtener observable
    return this.text$.asObservable(); // retorno data como observable 
    //me permite llamarlo como servicion desde otros archivos
  }



}
