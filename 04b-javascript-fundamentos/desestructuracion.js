

const spiderman = {
    nombre: 'Peter',
    apellido: 'Parker',
    poder: 'Sentido arácnido',
    getNombre: function(){
        return `${ this.nombre } ${this.apellido} tiene el 'poder' llamado "${this.poder}"`;
    }
}
// console.log(spiderman.getNombre());
// esto es la forma antigua
// const nombre  = spiderman.nombre;
// const apellido= spiderman.apellido;
// const poder   = spiderman.poder;
// console.log(nombre, apellido, poder);


// Para evitar tener que hacer las asignaciones anteriores esta a desestructuracion
// const { nombre, apellido, poder, edad = 30} = spiderman;
// console.log(nombre, apellido, poder, edad);

// const imprimeHeroe = ( heroe ) => {
//     const { nombre, apellido, poder, edad = 30} = heroe;
//      console.log(nombre, apellido, poder, edad);
// }
const imprimeHeroe = ( { nombre, apellido, poder, edad = 30 }) => {   
    nombre = 'Javier';
     console.log(nombre, apellido, poder, edad);
}
// imprimeHeroe(spiderman);

const heroes = ['Spiderman', 'Superman', 'Thor'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
// console.log(h1, h2, h3);
const [ h1, h2, h3 ] = heroes;
console.log(h1, h2, h3); // 'Spiderman', 'Superman', 'Thor'

const [ , , h5 ] = heroes; // omito el primero y el segundo del array
console.log(h5); // Thor