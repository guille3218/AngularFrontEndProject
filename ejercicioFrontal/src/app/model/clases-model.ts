export class Movimiento {
    descripcion: string;
    fecha: Date;
    cantidad: number;
    balance: number = 0;

    constructor(descripcion: string, fecha: Date, cantidad: number) {
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.balance = this.balance + cantidad;
    }


}

export class Cliente {

    nombre: string;
    apellidos: string;
    static _nCuenta: number = 0;
    nCuenta: number;
    dni: string;
    tlf: number;
    email: string;
    saldo: number = 0;
    movimientos: Movimiento[] = [];

    constructor(nombre: string, apellidos: string, dni: string, tlf: number, email: string) {
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