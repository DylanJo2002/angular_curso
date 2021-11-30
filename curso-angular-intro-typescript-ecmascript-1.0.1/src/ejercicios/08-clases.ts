// import {calculaISV} from './ejercicios/06-desestructuracion-func';
/*
    ===== Código de TypeScript =====
*/

/**
 * Clases básicas
 * 
 * Las interfaces no existen en JS y por lo tanto
 * no serán compiladas a un código real. A diferencia de las
 * clases
 * 
 * En una interfaz no puedo definir cómo se comporta
 * un método. Solamente puedo definir su firma
 * 
 * La mayor parte de TS son validaciones y reglas que
 * tenemos para escribir de forma más limpia los códigos.
 * 
 * Por defecto el nivel de acceso de los atributos en las clases
 * son public
 */

class PersonaNormal {
    constructor(
        public nombre: string, 
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(public alterEgo: string,
                public edad: number,
                public nombreReal: string,
                public direccion: string
        ){super(nombreReal, direccion)}
}

const ironman = new Heroe('Ironman',18,'Tony Stark','Ny 4');
console.log(ironman);
