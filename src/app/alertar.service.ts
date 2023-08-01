export class Alerta { //hay que exportarlo
    cantidad = 0
    Alertar(nombre: string) {
        alert("hola" + nombre + "la tarea es la numero" + this.cantidad)
    }
    sumarTarea() {
        this.cantidad = + 1;
    }
}
//llamo el archivo nombreServicio.service.ts
