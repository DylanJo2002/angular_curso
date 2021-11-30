/*
    ===== Código de TypeScript =====
*/

/**
 * Desestructuración de arreglos en una funcion
 */
interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nocia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'Ipad A1',
    precio: 350
}

function calculaISV(productos: Producto[]): [number,number] {
    let total: number = 0;
    productos.forEach(({precio})=>{
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('ISV', isv);
console.log('Total', total);
export {Producto,calculaISV};
