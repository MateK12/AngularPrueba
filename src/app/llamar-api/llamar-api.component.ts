import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-llamar-api',
  templateUrl: './llamar-api.component.html',
  styleUrls: ['./llamar-api.component.css']
})
export class LlamarAPIComponent {
  isred = false
  constructor(private _weather: WeatherService) {
    setTimeout(() => {
      this.isred = true
    }, 5000)
  }

  // this._weather.GetWeather().suscribe(data => {
  //   console.log(data);
  // })
  //Llamo a la funcion y me suscribo, espero a respuesta,
  //lo mando al event loop y una vez recivida ejecuto la funcion
}
