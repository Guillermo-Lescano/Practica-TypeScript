"use strict";
//La clase es como una especie de modelo y/o esqueleto de luego la instanciamos le pasamos los datos y listo
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
        //el this hace referencia a los atributos de la clase inicializados
    }
    //el constructor sobrescribe los datos con la cual inicializamos la clase
    constructor(nombre, protagonistas, actores) {
        this.nombre = '';
        //como pusimos arriba, el this hace referencia al atributo de la clase
        this.nombre = nombre,
            this.protegonistas = protagonistas,
            this.actores = actores;
    }
}
const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Marggot Robbie', 'Rian Gosling']);
const pelicula2 = new Pelicula('OppenHeimer', ['OppenHeimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr']);
console.log(pelicula);
console.log(pelicula2);
