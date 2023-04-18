
const http = require('http');

const servidor = http.createServer((req,res) => {
    
    res.end('Hola Javier!!');
});
const PUERTO = 3000;
servidor.listen(PUERTO, () => {

    console.log(`Servidor corriendo en puerto ${PUERTO}`);
    
});
