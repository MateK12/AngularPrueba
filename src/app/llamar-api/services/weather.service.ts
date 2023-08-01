import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
//Puedo usar los servicios para la comunicacion entre componentes, la peticion de APIs, y para reutilizar metodos

export class WeatherService {
    constructor(private http: HttpClient) { }
    //uso el e
    key = "88baaef4036e3165a0aa676b022878f8";
    url = `https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=${this.key}`;
    GetWather() {
        return this.http.get(this.url);
        //hace una peticion get (y aca va la url)
    }
}