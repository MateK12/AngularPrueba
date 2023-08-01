import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado = 0;
  sumar(ope1: string, ope2: string): void {
    let num1 = parseInt(ope1);
    let num2 = parseInt(ope2);
    this.resultado = num1 + num2
  }
}
