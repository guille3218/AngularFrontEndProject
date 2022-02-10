import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/clases-model';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  c1 = new Cliente('Guille', 'Moreno', '41323421T', 623412344, 'guille@gmail.com');
  c2 = new Cliente('Gonzalo', 'Waack', '41323422T', 623566424, 'gonzalo@gmail.com');
  c3 = new Cliente('Joel', 'Quenard', '41323423T', 623412344, 'joel@gmail.com');
  c4 = new Cliente('Iria', 'Clavero', '41323424T', 623897542, 'iria@gmail.com');
  c5 = new Cliente('Ivan', 'Jimenez', '41323425T', 623412344, 'ivan@gmail.com');
  c6 = new Cliente('Alba', 'Padin', '41323426T', 623412344, 'alba@gmail.com');


  clienteTable: Cliente[] = [this.c1, this.c2, this.c3, this.c4, this.c5, this.c6];


  constructor() { }

  ngOnInit(): void {
  }

  updateTable(event: Cliente) {
    let array = [...this.clienteTable];
    array.push(event);
    this.clienteTable = array;
  }

  deleteClient(event: string) {
    let array = [...this.clienteTable].filter(function filterByDNI(client: Cliente) {
      return client.dni != event;

    });
    this.clienteTable = array;
  }
}
