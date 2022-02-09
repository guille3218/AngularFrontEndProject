import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente, Movimiento } from '../model/clases-model';


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
