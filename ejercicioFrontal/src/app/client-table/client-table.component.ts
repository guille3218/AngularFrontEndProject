import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


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
  nCuenta: number = 0;
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
    this.nCuenta = this.nCuenta + 1
  }

  addMovement(movimiento: Movimiento) {
    this.movimientos.push(movimiento);
    this.saldo = this.movimientos[this.movimientos.length - 1].balance;
  }
}


@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnChanges {
  @Output() addNewClient = new EventEmitter<Cliente>();
  @Output() deleteClient = new EventEmitter<String>();

  @Input() clienteTable;

  dataSource: MatTableDataSource<any>;




  displayedColumns: string[] = ['dni', 'name', 'lastName', 'balance', 'tlf', 'email'];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.clienteTable)
  }


  addClient() {
    let nombre: String = prompt("Introduce el nombre");
    let apellidos: String = prompt("Introduce los apellidos");
    let dni: String = prompt("Introduce el DNI");
    let tlf: number = +(prompt("Introduce el teléfono"));
    let email: String = prompt("Introduce el email");

    let client = new Cliente(nombre, apellidos, dni, tlf, email);

    this.addNewClient.emit(client);
  }

  deleteCliente(dni: String) {
    let accept = confirm("¿Seguro que desea eliminar este cliente? DNI:" + dni)
    if (accept) {
      this.deleteClient.emit(dni)
    }

  }

  updateClientForm() {
    window.open("/update-client-form", "_blank", 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }

  clientDetails(dni: String) {
    let cliente: Cliente;

    for (let i = 0; i < this.clienteTable.length; i++) {
      if (dni === this.clienteTable[i].dni) {
        cliente = this.clienteTable[i];
      }

    }

    localStorage.setItem("cliente", JSON.stringify(cliente));

    window.open("/client-details", "_blank", 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }
}
