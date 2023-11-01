"use strict";
let dev = {
    nombre: 'Guillermo Lescano',
    tecnologias: ['React', 'Python'],
    tomarMate: false
};
let dev2 = {
    nombre: 'tecnologias',
    tecnologias: ['HTML', 'COBOL']
    //no agregamos tomarMate porque es opcional
};
let dev3 = {
    nombre: 'tecnologias',
    tecnologias: ['HTML', 'COBOL'],
    tomarMate: null
};
function enviarCV(programador) {
    console.log(`Este cv es de ${programador.nombre}`);
}
enviarCV(dev);
