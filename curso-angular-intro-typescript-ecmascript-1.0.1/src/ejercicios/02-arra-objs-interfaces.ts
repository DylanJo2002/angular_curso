/*
    ===== Código de TypeScript =====
*/
/**
 Tipo any no debería usarse y se considera mala práctica.
 Buena práctica: usar siempre variables tipadas solo con un tipo

 */
let x: (boolean | string | number)[] = ['Bash','Counter','Healing'];

let habilidade : string[] = ['Bash','Counter','Healing'];

//Interfaces
/**
 * Significan lo que queremos que sea nuestro objeto JSON
 */

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

//personaje.puebloNatal = 'Pueblo Paleta'; TS se queja.
personaje.puebloNatal = 'Pueblo Paleta';
console.table(personaje);
