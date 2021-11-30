
/*
    ===== Código de TypeScript =====
*/

/**
 * DECORADORES
 * Funciones exclusivas de TS.
 * 
 * Los decoradores sirven para cambiar las clases
 * en que son definidas (en momento de compilacion)
 * 
 * En angular casi todo es una clase. Es muy orientado a objetos
 * Un decorador no es más que una función que expande su clase añadiendo
 * funcionalidades especiales
 */

function classDecorator<T extends { new (...args: any[]): {}}>(
    constructor: T
){
    return class extends constructor {
        newProperty = "new property";
        hello: "override";
    }
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}
const miInstancia = new MiSuperClase;
console.log(MiSuperClase);
console.log(miInstancia.imprimir());
