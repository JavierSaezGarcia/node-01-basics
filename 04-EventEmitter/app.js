const EventEmitter = require('events'); // retorna una clase EventEmitter

const emisorProductos = new EventEmitter(); // Hacemos una instancia de esta clase

emisorProductos.on('compra', (numero = 500) => {
    console.log(`Se realizó una compra de ${ numero }€`);
});
emisorProductos.on('inventario', () => {
    console.log('Se realizó un inventario');
});

emisorProductos.emit('compra',750); // busca el evento 'compra' y que funcion tiene que hacer que seria la funcion de flecha con un parametro
emisorProductos.emit('compra');     // busca otra vez el evento 'compra' y como ya no tiene parametro pues isa la inicializacion para ejecutar la funcion
emisorProductos.emit('inventario'); // busca el evento inventario y mira que funcion tiene asociada y la ejecuta


// console.log(EventEmitter);