export class Movimiento {
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

export class Cliente {

    nombre: String;
    apellidos: String;
    static _nCuenta: number = 0;
    nCuenta: number;
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
        this.nCuenta = Cliente._nCuenta++;
    }

    addMovement(movimiento: Movimiento) {
        this.movimientos.push(movimiento);
        this.saldo = this.movimientos[this.movimientos.length - 1].balance;
    }
}