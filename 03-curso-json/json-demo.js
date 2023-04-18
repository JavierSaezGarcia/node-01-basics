const curso = require('./curso.json');

console.log('esto es un objeto javascript:', typeof(curso));
const strJson = JSON.stringify(curso);
console.log('esto es un json y es un string que es ideal para enviar al servidor:', strJson, typeof(strJson));
console.log('y no puedo acceder a ninguna propiedad con este ejemplo undefined: ',strJson.titulo);
const objJavascript = JSON.parse(strJson);
console.log('esto es un objeto javascript con propiedades que es como me viene del servidor:', typeof(objJavascript));
console.log('y aqui si puedo acceder a las propiedades como título: ', objJavascript.titulo);
