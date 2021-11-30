/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mes",
    detalles: {
        autor: "Dilan",
        anio: 2021
    }
}
//En detalles le estamos asignando el nombre de det.
const {volumen, cancion, detalles: det} = reproductor;
const {autor} = det;

console.log(`El volumen actual es de: ${volumen} \nCancion actual: ${cancion} \nAutor actual: ${autor}`);

//Deestructuración de arreglos (se hace con llaves cuadradas)
const dbz: string[] = ['Gokú', 'Vegeta', 'Trunks','Posicion'];
const [goku,vgt,trunks] = dbz;
// Si no necesito más variables que una después de la primera posición
const [,,,posicion] = dbz;
console.log(`Personaje 1: ${goku}`);
console.log(`Personaje 2: ${vgt}`);
console.log(`Personaje 3: ${trunks}`);
console.log(`Sin destructurar todas ${posicion}`)
