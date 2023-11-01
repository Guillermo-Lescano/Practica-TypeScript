// type nombre del tipo que queremos siempre en mayusculas como las interfaces

type Programador = {
    nombre: string,
    tecnologias : string[],
    tomarMate?: boolean | null
    //si asignamos un signo de pregunta es opcional este atributo
}


let programadorr: Programador = {
    nombre: 'Guillermo Lescano',
    tecnologias: ['React', 'Python'],
    tomarMate: false
}

let programador2 : Programador = {
    nombre: 'tecnologias',
    tecnologias: ['HTML', 'COBOL']
    //no agregamos tomarMate porque es opcional
}

let programador3 : Programador = {
    nombre: 'tecnologias',
    tecnologias: ['HTML', 'COBOL'],
    tomarMate: null
}
