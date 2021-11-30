
// import {calculaISV} from './ejercicios/06-desestructuracion-func';
/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-func";

/**
 * Importaciones y exportaciones
 */



const carritoComprar: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 250
    }
];

 const [total, isv] = calculaISV(carritoComprar);

console.log('ISV', isv);
console.log('Total', total);
