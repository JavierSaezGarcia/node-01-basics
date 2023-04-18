// Routers: como se crean para evitar tener que crear rutas manualmente y repetir codigo
const express = require('express');
const { infoCursos } = require('../datos/cursos'); // forma de importar diferente a matematicas
const { descendente, ascendente } = require('../funciones/ordenar');
const routerProgramacion = express.Router();
const programacion = infoCursos.programacion;

// Importante añadir que el formato que queremos es json Y PARA ESO HACEMOS LO SIGIENTE
// **********   MIDDELWARE:   *********
routerProgramacion.use(express.json());
// LAS FUNCIONES MIDDLEWARE SE EJECUTAN DESPUES DE RECIBIR UNA SOLICITUD Y ANTES DE ENVIAR UNA RESPUESTA


/**
 *  METODOS GET ****************************************
 */

routerProgramacion.get('/', (req,res) => {
    ascendente(req.query.ordenar,res,infoCursos.programacion);
    res.send(infoCursos.programacion); 
});

// COMO TOMAR UN CURSO EN CONCRETO? CON LOS PARAMETROS URL
// ******************   Filtrar por cursos de PROGRAMACION  ****************
// Usariamos los dos puntos que nos dice que es un parametro URL y la key que queramos usar
// :lenguaje
routerProgramacion.get('/:lenguaje', (req,res) => {
    // asignamos a una constante que llamaremos como queramos el parametro que ponemos con req.params.miParametro
    const lenguaje = req.params.lenguaje;
    
    const resultados = infoCursos.programacion.filter(curso => 
        // filtramos la key de la bd a buscar con el parametro
        curso.lenguaje === lenguaje 
    );
    // Nos aseguramos que se obtenga un resultado y si no lo obtenemos hacemos un return con:
        // el status 404 de no encontrado 
        // y enviamos el parametro por un literal ${lenguaje} de lo que hemos puesto en la url
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }
    // *********** ordenamos resultados con ? key=value **************
    ascendente(req.query.ordenar,res,resultados);
    // descendente(req.query.ordenar,res,resultados);
    
    // En caso de que encuentre resultados los convertimos en string y los enviamos a la web
    res.send(resultados); 
});
// ************** MAS DE 1 PARAMETRO EN URL *********************
routerProgramacion.get('/:lenguaje/:nivel', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter( 
        curso => 
        curso.lenguaje === lenguaje &&
        curso.nivel === nivel
        );
    if(resultados.length === 0){
        return res.status(204).send(`No se encontraron unos cursos de ${lenguaje} de nivel ${nivel}`) 
        //return res.status(204).end();
    };
    res.json(resultados)

});

/**
 * METODOS POST *****************
 */
// Recordemos que '/' es la base por defecto pero qe corresponde a '/api/cursos/programacion'
routerProgramacion.post('/', (req,res) => {

    let cursoNuevo = req.body;
    
    programacion.push(cursoNuevo);
    res.send(programacion)

});


/**
 * **********  METODO PUT  *************
 * 
 */
// NECESITAMOS EL ID
routerProgramacion.put('/:id', (req,res) => {
    const cursoActualizado = req.body; // cuerpo de la request que es el curso completo
    const id = +req.params.id;
    // En el arreglo de cursos de programacion tratamos de encontrar el indice que corresponde a este curso
    const indice = programacion.findIndex(curso => curso.id === id);
    // Una vez encontrado si el indice es valido
    if( indice >= 0) {
        // reemplazamos el curso que teniamos anteriormente con el curso actualizado
        programacion[indice] = cursoActualizado;
    }else{
        res.status(404)
    }
    // Enviamos la actualiaciond el curso aunque no es necesario formatearlo a JSON
    res.send(programacion);
});

/**
 * **********  METODO PATCH  *************
 * 
 */
// NECESITAMOS EL ID
routerProgramacion.patch('/:id', (req,res) => {

    const infoActualizada = req.body;

    const id = +req.params.id;

    const indice = programacion.findIndex(curso => curso.id === id);
    const cursoAModificar = programacion[indice];
    if(indice >= 0){
        // con object.assing su funcion es es copiar 
        // todas las propiedades de los objetos que elijamos a otro objeto.
        // tiene dos parametros: objeto-origen, objeto-destino
        Object.assign(cursoAModificar,infoActualizada);
    }
    // Enviamos
    res.send(programacion);

});

/**
 * **********  METODO DELETE  *************
 * 
 */
// NECESITAMOS EL ID
routerProgramacion.delete('/:id', (req,res) => {
    // EN DELETE NO NECESITAMOS EL CUERPO DE LA INFORMACION
    // pero si el indice
    const id = +req.params.id;
    // buscamos el indice
    const indice = programacion.findIndex(curso => curso.id === id);
    if(indice >= 0){
        delete programacion[indice];
        // otra forma
        // programacion.splice(indice,1);
    }
    res.send(programacion);



});


module.exports = routerProgramacion;