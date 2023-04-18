

// creamos funciones con tres parametros: la query, la respuesta y los resultados
const ascendente = (query,respuesta,resultados) => {
    if(query === 'vistas'){
        
        return respuesta.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)))
    }
}
const descendente = (query,respuesta,resultados) => {
    if(query === 'vistas'){
        return respuesta.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)))
    }
}
module.exports = {
    ascendente, 
    descendente
}
