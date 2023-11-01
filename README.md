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

