
//lo que ponemos en la T es generico, esto quiere decir que puede ser un number, String, Boolean etc
class Sorteo<T>{
    private ticket?: T; //al estar en pivado ticket, solo se puede modificar con un set en la instancia de la clase

    constructor(private nombre: string){}

    //vamos a utilizar get y set ahora
    setTicket(ticket: T){
        this.ticket = ticket
    }

    getTicket(){
        return this.ticket
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }

}

let sorteo = new Sorteo<string>('Guillermo Lescano')
sorteo.setTicket('s7')

console.log(sorteo.sortear())