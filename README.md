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
    - String
    - Number
    - Boolean
    - Undefined
    - Null

### Compuestos estructurados:
    - Object 
    - Array
    - Enum
    - Function

### Definidos por el usuario
    - Class
    - Interface
    - Type
