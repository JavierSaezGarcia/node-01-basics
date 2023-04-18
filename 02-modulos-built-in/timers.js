const direccion = 'https://nodejs.org/api/timers.html';

///////////////////////
// setTimeout(function, milliseconds, args)

const mostrarTema = (tema) => {
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 1000, 'Node.js'); // 1er argumento: la funcion, 2o argumento: el retraso en milisegundos, 3er argumento el valor a pasar

const sumar = (a,b) => {
    console.log(a+b);
}
setTimeout(sumar, 2000, 5, 6);

// setImmediate(function, arg1, arg2)

console.log('Antes de setInmediate');

setImmediate(mostrarTema, 'Angular y lo muestro despues de los console sincronos y antes de los retrasos setTimeout');
console.log('Despues de setInmediate');

// setInterval( funcion, intervalo, arg1, arg2 )
setInterval(mostrarTema, 1500, 'Node.js y me ejecuto al final cada segundo y medio infinitas veces');

setInterval(sumar, 1500, 3, 4);

