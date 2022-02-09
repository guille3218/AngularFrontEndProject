import { Component, OnInit } from '@angular/core';
import { Cliente, Movimiento } from '../model/clases-model';


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
