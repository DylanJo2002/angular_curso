
/*
    ===== Código de TypeScript =====
*/
/**
 * ENCADENAMIENTO OPCIONAL
 * Optional chaining
 * El operador ? en cahining es el secure operator
 */

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1 : Pasajero = {
    nombre: 'Fernnado'
}

const pasajero2 : Pasajero = {
    nombre: 'Mateo',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos (pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
