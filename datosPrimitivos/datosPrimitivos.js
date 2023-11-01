"use strict";
/* -------------------- DATOS PRIMITIVOS -------------------- */
let interMiami = 11; //podemos decir que puede tomar 3 tipo de valores
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = 'Me emocione al verlo a messi';
function jugar(equipo1, equipo2, juegaMessi) {
    if (juegaMessi) {
        equipo1 += messi;
    }
    if (equipo1 > equipo2) {
        console.log('Gana Inter de Miami');
    }
    if (equipo1 === equipo2) {
        console.log('Empatan');
    }
    if (equipo1 < equipo2) {
        console.log('Gana FC Dallas');
    }
}
jugar(interMiami, fcDallas, juegaMessi);
//al definir palabras como string si ponemos palabras. nos sale todo lo que necesitamos para 
//para las propiedades string
