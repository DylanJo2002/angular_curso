/*
    ===== Código de TypeScript =====
*/
/*En JS se puede cambiar el valor e incluso el tipo
sin que el interprete se queje. En typescript no se puede
realizar esto debido a sus característica tipada, a menos
de que se utilice el operador | en la firma del tipo. Esta
práctica de que una variable pueda ser de dos tipos no es re-
comendada. La idea es trabajar con un tipado estricto para 
que nos ayude bastante.

Una variable que tenga más de un tipo, al utilizar typeof,
nos mostrará el tipo del dato que contiene en ese momento 
y no todos los posibles tipos.

El ser fuertemente tipado nos asegura que la data no va a cambiar
en relacion con el tipo de dato y nos evita posibles errores.

*/
let nombre: string = 'Strider';
let hp: number | string = 95;
let estaVivo: boolean = true;
hp = 'Hola'
nombre = 'Fernando';

console.log(typeof hp);