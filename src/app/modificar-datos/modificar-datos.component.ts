import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.css']
})
export class ModificarDatosComponent {
  @Input() fatherName: string;
  nuevoUsuario = {}
  modalVisible = false
  tipodocumento = ""
  numeroDocumento = 0
  nombre = ""
  apellido = ""
  sexo = ""
  direccion = ""
  localidad = ""
  codigoPostal = 0
  provincias = ""
  departamento = null
  email = ""
  numeroLlamadas = 0
  numeroWapp = 0
  listaProvincias = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
  ];
  listaDepartamentos = [
    "Capital",
    "Godoy Cruz",
    "Guaymallén",
    "Junín",
    "La Paz",
    "Las Heras",
    "Lavalle",
    "Luján de Cuyo",
    "Maipú",
    "Malargüe",
    "Rivadavia",
    "San Carlos",
    "San Martín",
    "San Rafael",
    "Santa Rosa",
    "Tunuyán",
    "Tupungato"
  ];
  provincia = "dsa"
  constructor() {

  }
  SetProvincia() {
    this.nuevoUsuario = {
      tipoDOcumento: this.tipodocumento,
      numerodocumento: this.numeroDocumento,
      nombre: this.nombre,
      apellido: this.apellido,
      sexo: this.sexo,
      direccion: this.direccion,
      localidad: this.localidad,
      codigoPostal: this.codigoPostal,
      provincia: this.provincia,
      departamento: this.departamento,
      email: this.email,
      numeroLlamadas: this.numeroLlamadas,
      numeroWhatsapp: this.numeroWapp
    }
    console.log(this.nuevoUsuario);
  }
  mostrar() {
    this.modalVisible = true
  }
  handleCancel() {
    this.modalVisible = false
  }
  handleEditar() {
    this.nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      sexo: this.sexo,
      direccion: this.direccion,
      localidad: this.localidad,
      codigoPostal: this.codigoPostal,
      provincia: this.provincia,
      departamento: this.departamento,
      email: this.email,
      numeroLlamadas: this.numeroLlamadas,
      numeroWhatsapp: this.numeroWapp
    }
    console.log(this.nuevoUsuario);
  }
}
