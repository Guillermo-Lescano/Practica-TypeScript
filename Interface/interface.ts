
interface ProgramadorInterface{
    nombre: string,
    tecnologias : string[],
    tomarMate?: boolean | null
    //si asignamos un signo de pregunta es opcional este atributo
}


let dev: ProgramadorInterface = {
    nombre: 'Guillermo Lescano',
    tecnologias: ['React', 'Python'],
    tomarMate: false
}

let dev2 : ProgramadorInterface = {
    nombre: 'tecnologias',
    tecnologias: ['HTML', 'COBOL']
    //no agregamos tomarMate porque es opcional
}

let dev3 : ProgramadorInterface = {
    nombre: 'tecnologias',
    tecnologias: ['HTML', 'COBOL'],
    tomarMate: null
}


function enviarCV(programador: ProgramadorInterface){
    console.log(`Este cv es de ${programador.nombre}`)
}

enviarCV(dev)