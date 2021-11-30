/*
    ===== Código de TypeScript =====
*/
/* 
TY siempre trata compilar, aún con errores
a JS.
*/
function sumar(a: number,b: number): number{
    return (a + b);
}

const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}

/*
Primero van los arg obligatorios, luego los opcionales y
por último los que tienen un valor por defecto 
*/
function multiplicar( numero: number, otroNumero?: number, base: number = 2): number{
    return numero*base;
}

// const resultado = multiplicar(10);

// console.log(resultado);

interface PersonajeLDR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLDR, curarX: number): void{
    
    personaje.pv += curarX;

    console.log(personaje); 
}

const nuevoPersonaje: PersonajeLDR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: '+this.pv);
    }
}

curar(nuevoPersonaje, 20);
 nuevoPersonaje.mostrarHp();
