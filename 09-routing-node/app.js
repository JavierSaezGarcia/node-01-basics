const http = require('http');
const { infoCursos } = require('./cursos');

const servidor = http.createServer( (req,res) => {

    const metodo  = req.method; // extraemos el metodo method por desestructuracion javascript

    switch( metodo ) {
        case 'GET':          
            return manejarSolicitudGET(req,res);            
        case 'POST':
            return manejarSolicitudPOST(req,res);  
        
        default:
            res.statusCode = 501; // estado por defecto cuando hay un error en el metodo
            res.end(`Este método no puede ser manejado por el servidor: ${metodo}` );
            break;
    }
});

manejarSolicitudGET = (req,res) => {
    const camino = req.url;
    
    if (camino === '/' && res.statusCode === 200) {
        res.writeHead(200,{'Content-Type':'application/json'});
        
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
        
    } else if(camino === '/api/cursos') {
        res.statusCode = 200;
        
        return res.end(JSON.stringify(infoCursos));
    } else if(camino === '/api/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion))
    }
    res.statusCode = 404;
    res.end('El recurso solicitado no existe');

};

manejarSolicitudPOST = (req,res) => {
    const path = req.url;
    if( path === '/cursos/programacion') {       
        
        let body = '';
        // ahora usamos un emisor de eventos de node .on()
        // cuando ocurra el evento data lo añadimos a la variable cuerpo en un string
        req.on('data', (contenido) => {
            body += contenido.toString();
        });
        // cuando ocurra el evento 'end' que es cuando termina el proceso POST mostramos el cuerpo
        req.on('end', () => {
            console.log(body); // la mostramos
            console.log(typeof body); // miramos su tipo de dato
            // Pasamos el string a objeto JSON
            body = JSON.parse(body);
            console.log(typeof body);
            console.log(body.titulo);
            return res.end(`El servidor recibió una solicitud ${req.method} para /cursos/programacion y el estatus es ${res.statusCode}`);
        });
        
        // return res.end(`El servidor recibió una solicitud ${req.method} para /cursos/programacion y el estatus es ${res.statusCode}`);
        
    } 
    

}


const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
})