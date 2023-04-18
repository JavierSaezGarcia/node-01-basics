
const fs = require('fs');
console.clear();

console.log('1.- Antes de leer el archivo...');
// LEE ARCHIVOS
fs.readFile('./index.html', 'utf-8', (err, contenido) => {
    
    if(err){
       throw err; // detiene si hay error
    } 
    console.log(contenido); // string
    
    
});
console.log('Después de leer el archivo...');

// RENOMBRA ARCHIVOS
fs.rename('./index.html','./main.html', (err) => {
    
    if(err){
        throw err;
    }
    console.log('Nombre canmbiado exitosamente a main.js');
});
console.log('Después de renombrar el archivo...');


// AÑADE CONTENIDO AL FINAL DEL HTML
fs.appendFile('./main.html','<p>Contenido al final</p>', (err) => {
    if(err) {
        throw err
    }
    console.log('Archivo con añadido correctamente'); 
});
console.log('Después de añadir al archivo...');

// REEMPLAZA CONTENIDO DE UN ARCHIVO
fs.writeFile('./main.html','<h1>Contenido nuevo</h1>', (err) => {
    if(err) {
        throw err;
    }
    console.log('Contenido de main.html cambiado');
});
console.log('Después de reemplazar el contenido del archivo...');

// ELIMINA UN ARCHIVO POR EJEMPLO index.js
fs.unlink('./main.html', (err) => {
    if(err) {
        throw err
    }
    console.log('Archivo main eliminado correctamente'); 
});

console.log('Después de eliminar el archivo...');

