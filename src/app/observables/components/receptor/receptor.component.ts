import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmisorComponent } from '../emisor/emisor.component';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent {
  // constructor(private _obsService: EmisorComponent) {
  //   _obsService.getText().subscribe(data => { //llamo a la funcion para obtener el obsevable
  //     console.log(data);       //ejecuto lo que necesito una vez obtenida la info
  //     this.textToShow = data;
  //   })
  // }
  //Comentado por que no anda, cuando al componente emisor del obsevable lo cambie an un service funcionara
  textToShow = "";
}
