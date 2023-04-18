
const promesaCumplida = false;
// const promesaCumplida = true;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('Promesa cumplida y recibida la respuesta del servidor!');
        } else {
            reject('Promesa rechazada por no recibir respuesta del servidor')
        }
    }, 3000);
});

miPromesa
    .then((valor) => { // funcion asociada al exito true (resolve)
        console.log(valor);
    })
    .catch((razonRechazo) => { // funcion asociada al fracaso false (reject)
        console.log(razonRechazo);
    })
    .finally(() => console.log("Proceso terminado."));

// Ejemplo 2 ***********************************************************


const estatusPedido = () => {
    return Math.random() < 0.8;   
};


const miPedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) {
            resolve('Menor de 0.8 y pedido recibido');
        }else{
            reject('Mayor de 0.8 y error pedido')
        }
    }, 3000);
});
// const exitoPedido = (msgComfirm) => {
//     console.log(msgComfirm)
// };
// const rechazoPedido = (msgComfirm) => {
//     console.log(msgComfirm)
// };

// miPedidoPizza.then(exitoPedido, rechazoPedido);   

miPedidoPizza
    .then((msgExito) => {
        console.log(msgExito)
    })
    .catch((msgRechazo) => {
        console.log(msgRechazo)
    })