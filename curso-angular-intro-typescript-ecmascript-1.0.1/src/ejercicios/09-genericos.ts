
/*
    ===== Código de TypeScript =====
*/

/**
 * GENERICOS
 * Uso poder decir que tipo de dato se va a obtener, retornar
 * 
 */
//Tipo generico, no necesariamente devuelve tipo generico.
// Recibe un tipo generico.
function queTipoSoy<T> (argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero= queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3]);

let soyExplicito = queTipoSoy<number>(100);


