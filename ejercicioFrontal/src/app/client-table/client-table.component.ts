import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente, Movimiento } from '../model/clases-model';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateClientComponent } from '../dialog-update-client/dialog-update-client.component';


@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnChanges {
  @Output() addNewClient = new EventEmitter<Cliente>();
  @Output() deleteClient = new EventEmitter<string>();

  @Input() clienteTable;

  dataSource: MatTableDataSource<any>;




  displayedColumns: string[] = ['dni', 'name', 'lastName', 'balance', 'tlf', 'email'];

  constructor(public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.clienteTable)
  }


  addClient() {
    let nombre: string = prompt("Introduce el nombre");
    let apellidos: string = prompt("Introduce los apellidos");
    let dni: string = prompt("Introduce el DNI");
    let tlf: number = +(prompt("Introduce el teléfono"));
    let email: string = prompt("Introduce el email");

    let client = new Cliente(nombre, apellidos, dni, tlf, email);

    this.addNewClient.emit(client);
  }

  deleteCliente(dni: string) {
    let accept = confirm("¿Seguro que desea eliminar este cliente? DNI:" + dni)
    if (accept) {
      this.deleteClient.emit(dni)
    }

  }

  openDialog(dni: string): void {
    let cliente: Cliente;
    for (let i = 0; i < this.clienteTable.length; i++) {
      if (dni === this.clienteTable[i].dni) {
        cliente = this.clienteTable[i];
      }

    }

    const dialogRef = this.dialog.open(DialogUpdateClientComponent, { width: '1200px', data: cliente });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed.")
    })
  }

  clientDetails(dni: string) {
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
