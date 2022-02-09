import { Component, OnInit } from '@angular/core';

class Movimiento {
  descripcion: String;
  fecha: Date;
  cantidad: number;
  balance: number = 0;

  constructor(descripcion: String, fecha: Date, cantidad: number) {
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.cantidad = cantidad;
    this.balance = this.balance + cantidad;
  }


}

class Cliente {

  nombre: String;
  apellidos: String;
  dni: String;
  tlf: number;
  email: String;
  saldo: number = 0;
  movimientos: Movimiento[] = [];

  constructor(nombre: String, apellidos: String, dni: String, tlf: number, email: String) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.tlf = tlf;
    this.email = email;
  }

  addMovement(movimiento: Movimiento) {
    this.movimientos.push(movimiento);
    this.saldo = this.movimientos[this.movimientos.length - 1].balance;
  }
}

@Component({
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  cliente: Cliente;
  constructor() { }

  ngOnInit(): void {

    this.cliente = JSON.parse(localStorage.getItem('cliente'))



  }

}
