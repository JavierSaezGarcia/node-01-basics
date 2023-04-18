
const fs = require('fs');
console.clear();

console.log('1.- Antes de leer el archivo...');
// LEE ARCHIVOS
const archivo = fs.readFileSync('./index.html', 'utf-8');
console.log(archivo);
console.log('Después de leer el archivo...');

// RENOMBRA ARCHIVOS
fs.renameSync('./index.html','./main.html');
console.log('Después de renombrar el archivo...');


// AÑADE CONTENIDO AL FINAL DEL HTML
fs.appendFileSync('./main.html','<p>Contenido al final</p>');
console.log('Después de añadir al archivo...');

// REEMPLAZA CONTENIDO DE UN ARCHIVO
fs.writeFileSync('./main.html','<h1>Contenido nuevo</h1>');
console.log('Después de reemplazar el contenido del archivo...');

// ELIMINA UN ARCHIVO POR EJEMPLO index.js
fs.unlinkSync('./main.html');

console.log('Después de eliminar el archivo...');

