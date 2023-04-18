

const http = require('http');

const servidor = http.createServer((req, res) => {
    // URL que queremos solicitar
    // console.log('===> req (solicitud)');
    // req.url nos da el path que hayamos escrito a continuacion del home "localhost:3000/path"
    // cuando path puede ser usuarios/user/javier
    // console.log(req.url); 
    // req.method nos da el metodo usado get post ect
    // console.log(req.method);
       
    // cabecera de la solicitud
    // console.log(req.headers);


    console.log('===> res (respuesta)');
    // codigo de estatus de respuesta
    console.log(res.statusCode); // 200 OK
    // res.statusCode = 404;
    // console.log(res.statusCode); // 404 not found

    // Podemos incluir añadido a una cabecera
    res.setHeader('content-type','application/json');
    console.log(res.getHeaders());

    


    res.end('Hola mundo!')
});
const puerto = 3000;
// escucha del servidor
servidor.listen( puerto, () => {
    console.log(`El servidor esta escuchando en http://localhost:${ puerto }...`);
});