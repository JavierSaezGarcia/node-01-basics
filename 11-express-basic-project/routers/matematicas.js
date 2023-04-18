
const express = require('express');
const { ascendente, descendente } = require('../funciones/ordenar.js');
const { matematicas } = require('../datos/cursos.js').infoCursos; // Esta forma de importar es para tomar matematicas directamente de distinta forma a programacion 

// const { ascendente } = require('../funciones/ordenar.js');
const routerMatematicas = express.Router();

// Creamos otro para matematicas
routerMatematicas.get('/', (req,res) => {
    // ascendente(req.query.ordenar,res,matematicas)
    descendente(req.query.ordenar,res,matematicas);
    res.send(matematicas); 
});






// ******************   Filtrar por cursos de MATEMATICAS  ****************
routerMatematicas.get('/:tema', (req,res) => {
    const miTema = req.params.tema;

    const resultados = matematicas.filter(cursos => 
        cursos.tema === miTema        
    );
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron unos cursos de ${miTema}`) 
    }
    ascendente(req.query.ordenar,res,resultados)
    res.send(resultados); 
});

module.exports = routerMatematicas;