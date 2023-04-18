
const empleados = [
    {
        id: 1,
        nombre: 'Javier'
    },
    {
        id: 2,
        nombre: 'Aleth'
    },
    {
        id: 3,
        nombre: 'Oscar'
    }
];
const salarios = [
    {
        id: 1,
        salario: 1001
    },
    {
        id: 2,
        salario: 1500
    }
];


// const getEmpleado = ( id, callback ) => {
//     const empleado = empleados.find( emp => emp.id === id )?.nombre;
//     // resolve se va a ejecutar si todo va correctamente y si tenemos
//     const promesa = new Promise( (resolve, reject) => {
//         if( empleado ){
//             resolve(empleado)
//         }else{
//             reject(`No existe el empleado con id = ${id}`)
//         }

//     })
//     return promesa
//     if( empleado ){
//         callback(null, empleado);
//     }else{
//         callback(`Empleado con id = ${ id } no existe`);
//     }

// }
// Simplisficando...

const getEmpleado = (id) => {
    const empleado = empleados.find(emp => emp.id === id)?.nombre;
    
    return new Promise((resolve, reject) => {
        ( empleado ) 
            ? resolve(empleado) 
            : reject(`No existe el empleado con id = ${id}`);
    });
}

const getSalario = (id) => {
    const salario = salarios.find( sal => sal.id === id )?.salario; // la ? es un nullcheck operator que hace que no interrumpa la ejecucion si no existe
    return new Promise((resolve, reject) => {
        (salario)
            ? resolve(salario)
            : reject(`No existe salario del empleado con id = ${id}`)
    });   
}


const id = 3;
// getEmpleado(id)
//     .then((empleado) => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then((salario) => console.log(salario))
//     .catch((err) => console.log(err))

// LO QUE SIGUE ES POCO MANTENIBLE
// getEmpleado(id)
//     .then((empleado) => {
//         getSalario( id )
//             .then( salario => {
//                 console.log(`El empleado ${empleado} tiene un salario de ${salario} euros`);
//             })
//             .catch( err => {
//                 console.log(err)
//             })
//         })
//     .catch(err => console.log(err))

// Esta es la mejor forma
let nombre;
getEmpleado(id)
        .then( empleado => {
            nombre = empleado;
            return getSalario( id )
        })
        .then( salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
        .catch(err => console.log(err))
    