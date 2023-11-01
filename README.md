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

function jugar(equipo1: number, equipo2: number): void
si en una funcion no vamos a devolver nada, debemos poner void