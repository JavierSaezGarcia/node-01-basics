
const nombre = 'Spiderman';
const real = 'Peter Parker';

const normal = nombre + ' es ' + real;

console.log(normal);

// Otra forma de hacerlo con backticks incluso con expresiones como que ejecute una operacion matematica
const template = `${nombre} es ${real} y tiene ${ 13+15 } años`;
console.log(template);

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;
console.log(html);
