function sumar( a, b ){
    return a + b;
}
console.log(sumar(3,5)); // 8

const sumar2 = (a,b) => {
    return a+b;
}
console.log(sumar2(3,5));

// Pero si es solo una linea del cuerpo de la funcion se simplifica
const sumar3 = (a,b) => a+b;
console.log(sumar3(3,5));

// sin argumentos
const saludar = () => 'Hola Mundo!';

console.log(saludar());


