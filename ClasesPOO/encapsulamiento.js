"use strict";
//lo que ponemos en la T es generico, esto quiere decir que puede ser un number, String, Boolean etc
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //vamos a utilizar get y set ahora
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Guillermo Lescano');
sorteo.setTicket('s7');
console.log(sorteo.sortear());
