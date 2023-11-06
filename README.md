# Curso de TypeScript

Tenemos que saber que cuando compila ts, se combierte en un js
Necesitamos que compile en js el archivo .ts
Lo que voy a hacer va a ser un script.js para que compile en un script.js, y que lo llama el html

 - tsc script.ts - Lo que hacemos aca es convertirlo a js a ese archivo

# Seccion 2 - Modo observador

vamos a usar el modo observador, que observa los cambios que apartir del momento que se cambie, se transforma en js automaticamente
Para el modo observador necesitamos poner
 - tsc script.ts -w  ==> w: watch

Si creamos otro archivo, no se va a ver el modo obsewrvador porque solo esta el script.ts nomas

Debemos inicializar el proyecto en TS
 - tsc -init

Lo que mas se usa es el target en ts.

necesitamos que observe mas de un archivo ts debemos hacer
 - tsc -w  ==> solo anda si iniciamos el proyecto en ts

Se activa el modo strict en los js, para poder mejorar en la programacion

# Seccion 3 - Tipos de datos

En GitHub de SergiCode hay un repo con los tipos de datos

Tenemos datos primitivos, compuestos y definidos por el usuario.

### Primitivo: 
    - String ==> const str: string = "" // '' // `` 
    - Number ==> const num1: number = int 10 //float 10.5 //Exp 2.5e3 //Exp- 1.5e-3 //
    - Boolean ==> const bool1 : boolean = true // false
    - Undefined ==> const varUndefined : undefined // = undefined
    - Null ==> const varNull: null // = null

### Compuestos estructurados:
    - Object ==> const programador = {nombre:"segiCode", casadp:false, cursoYoutube: 4}
    - Array ==> const numeros : string[] = ['Juan', 'Maria', 'Pedro'] // : number[] = [1,2,3,4] // : bolean[]
    - Enum ==> enum DiasSemanas {Lunes, MArtes, Miercoles...} // enum Colores {Rojo = 'rojo, Verde = 'verde'}
    - Function ==> function sumar(a: number, b:number): number {return a + b} // function saludar(nombre:string, edad?: number): string {ver en la imagen la logica}

### Definidos por el usuario
    - Class
    - Interface
    - Type

Son definidos por el usuario porque aveces dependemos de las reglas de negocio.

### Aca Pongo el link al gitHub de SergiCode para tener imagenes para entender mejor los tipos de datos con ejemplos.

### - [Link de Imagenes de tipo de datos](https://github.com/sergiecode/tipo-de-datos-en-typescript)

# Seccion 04 - Datos primitivos

function jugar(equipo1: number, equipo2: number): void {}
si en una funcion no vamos a devolver nada, debemos poner void
se puede no poner

```
/* -------------------- DATOS PRIMITIVOS -------------------- */

let interMiami : number | null | undefined = 11 //podemos decir que puede tomar 3 tipo de valores
let fcDallas : number = 11
let messi : number = 1
let juegaMessi : boolean = true

let palabras: string = 'Me emocione al verlo a messi'

function jugar(equipo1: number, equipo2: number, juegaMessi?: boolean): void {
    
    if(juegaMessi){
        equipo1 += messi
    }
    if(equipo1 > equipo2){
        console.log('Gana Inter de Miami')
    }
    if(equipo1 === equipo2){
        console.log('Empatan')
    }
    if(equipo1 < equipo2){
        console.log('Gana FC Dallas')
    }
}

jugar(interMiami, fcDallas, juegaMessi)

//al definir palabras como string si ponemos palabras. nos sale todo lo que necesitamos para 
//para las propiedades string
```

# Seccion 06 - ANY:(cualquier dato)

Es un concepto muy importante en TypeScript, hay que tratar de evitarlo, ya que es una mala practica, any es cualquier tipo de datos
osea, puede ser boolean, number, string etc.

```
let disney;

disney = 'Star Wars y Marvel'
//console.log(disney.) al poner el punto me sale las metodos como tipo string, ya que al definir disney, sabe que escribimos un string

disney = 150000000
// console.log(disney.) ahora nos trae los metodos de number, y lo mas peligroso es que puede tomar cualquier dato la variable disney

disney = true
console.log(disney)
```

Si yo pongo al comienzo que disney es String, entonces los dos ultimos renombramientos, darian error, ya que solo acepta string y asi
si ponemos que es de tipo number o boolean

# Seccion 07 - Arrays
```
//Para poder tipar los arrays, debemos decir de que tipo son y luego colocar corchetes como abajo 

let arregloNumeros: number[] = [1,2,3,4,5,6]

let arregloTexto: string[] = ['HTML', 'CSS', 'JS']

arregloTexto[0].indexOf('HTML')

//si colocamos el . en la posicion del array, es igual que antes, nos aparece los metodos dependiendo del tipado
```

# Seccion 08 - Objetos(introduccion)

Son objetos literales , se puede sobrescribir el objeto, si y solo si, ponemos las mismas cosas que lleva dentro y por mas que no lo tipeamos
en la sobreescritura no deja poner un number en nombre, ya que cuando se creo el bojeto era un string, asi que toma por tipo que es string

```
let programador = {
    nombre: 'Guillermo Lescano',
    tecnologias: ['React', 'Python'],
    tomaMate: false
}

programador = {
    nombre: 'Ricardo Bueno',
    tecnologias: ['HTML'],
    tomaMate: true
}

//Los objetos tiene un tipado interno
```

# Seccion 09 - Type Personalizados

Se pueden realizar type personalizados con una simple sintaxis, esto nos ayuda a evitar usar any, ya que creamos lo que va a recibir dicho objeto con sus determinados valores, y si son opcionales o no

```
// type nombre del tipo que queremos siempre en mayusculas como las interfaces

type Programador = {
    nombre: string,
    tecnologias : string[],
    tomarMate?: boolean | null
    //si asignamos un signo de pregunta es opcional este atributo y puede ser boolen o null
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

```

# Seccion 10 - Interface

Son muy parecidas al type pero cuando profundizamos, nos damos cuenta que se usan para otro tipo de cosas
ya en la sintaxis, es interface Programador{} no tiene el =(igual)

```

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
```

# Seccion 11 - Clases y POO

Las clases cuando ponemos los atributos debemos inicializarlos o ponerle un signo de pregunta 

```
//La clase es como una especie de modelo y/o esqueleto de luego la instanciamos le pasamos los datos y listo

class Pelicula{
    nombre?: string = '';
    protegonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`)
        //el this hace referencia a los atributos de la clase inicializados
    }

    //el constructor sobrescribe los datos con la cual inicializamos la clase
    constructor(nombre: string, protagonistas: string[], actores: string[]){
        //como pusimos arriba, el this hace referencia al atributo de la clase
        this.nombre = nombre,
        this.protegonistas = protagonistas,
        this.actores = actores
    }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Marggot Robbie', 'Rian Gosling'])
const pelicula2 = new Pelicula('OppenHeimer', ['OppenHeimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr'])

console.log(pelicula)
console.log(pelicula2)

```

Existe una diferencia en como se crean las clases de TypeScript y JavaScript, ya que al inicio no se inicializan los atributos, en js directamente se pone el meto, y luego el constructor

# Seccion 12 - Encapsulamientos y genéricos

Seguimos con POO , vamos a trabar con los setters y los getters, que es lo que se llama encapsulamientos, y los genericos se ponen entre mayor y menor y es la forma en la cual una clase hace como un pivot en el tipo de dato que va a funcionar

# Seccion 13 - Creacion de un archivo React con TS

