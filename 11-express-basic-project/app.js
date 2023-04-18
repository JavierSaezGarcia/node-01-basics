// Llamamos a express
const express = require('express');
// crear una instancia de la aplicación Express
const app = express();
// Importamos el archivo cursos
const { infoCursos } = require('./datos/cursos');
// IMPORTAMOS LOS ROUTERS
const  routerProgramacion  = require('./routers/programacion');
const  routerMatematicas  = require('./routers/matematicas');



// // creamos funciones con tres parametros: la query, la respuesta y los resultados
// const ascendente = (query,respuesta,resultados) => {
//     if(query === 'vistas'){
        
//         return respuesta.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)))
//     }
// }
// const descendente = (query,respuesta,resultados) => {
//     if(query === 'vistas'){
//         return respuesta.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)))
//     }
// }

// Routers: como se crean para evitar tener que crear rutas manualmente y repetir codigo

app.use('/api/cursos/programacion', routerProgramacion);

app.use('/api/cursos/matematicas', routerMatematicas );

// definir una ruta para la página de inicio 'routing' y su método y una funcion flecha 
app.get('/', (req, res) => {
    res.send('¡Mi primer servidor con Express!');
});
// Creamos otra ruta GET que por convenio comenamos por /api/ y el objeto /cursos 
app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
});
// otro para programacion
const PUERTO = process.env.PORT || 3000;
// escuchar en el puerto 3000
app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});