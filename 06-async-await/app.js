
ordenarProducto = (producto) => {
    return new Promise( (resolve, reject) => {
    //    console.log(`Ordenando: ${producto} de la tienda`); 
       setTimeout(() => {
        if(producto === 'taza' || producto === 'silla'){
            resolve(`Ordenando un/a ${producto}...`);
        }else{
            reject(`El producto ${producto} no está disponible actualmente`);
        }
       },2000);
    });
}

procesarPedido = (respuesta) => {
    return new Promise( (resolve) => {
        console.log('Procesando pedido...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=> {
            resolve('Gracias por su compra. Disfruta tu producto')
        }, 5000)
    })
}

/**
 * ¿¿¿COMO PODEMOS HACER PARA ENCADENAR DOS PROCESOS ASINCRONOS QUE NECESARIAMENTE EL PRIMERO HA DE EJECUTARSE EN PRIMER LUGAR ANTES DEL SEGUNDO???
 * CON UNA CADENA DE PROMESAS
 */
// ordenarProducto('silla')
//     .then(respuesta => { // lamada que devolvera respuesta
//         console.log('Respuesta recibida: ', respuesta);
//         return procesarPedido(respuesta); // return que devuelve otra promesa
//     })
//     .then( respuestaProcesada => {// si es exitosa entra en el then y muestra el mensaje
//         console.log(respuestaProcesada);
//     })
//     .catch(err => { // si no es exitosa muestra el error
//         console.log(err);
//     })

// AHORA LO MISMO PERO CON ASYNC AWAIT QUE ES LA FORMA MAS FACIL DE HACER LO ANTERIOR

realizarPedido = async (producto) => {
    try {
        const respuesta = await ordenarProducto(producto);// esta linea con await se va a completar antes que la siguiente y asi cada linea
        console.log('respuesta recibida: ', respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);// esta linea con await se va a completar antes que la siguiente y asi cada linea
        console.log('Respuesta procesada: ', respuestaProcesada);
        
    } catch (error) {
        console.log('Lamentablemente: ', error);
        
    }
    
}

realizarPedido('taza');


