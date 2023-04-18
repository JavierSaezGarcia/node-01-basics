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

const getEmpleado = (id) => {    
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(emp => emp.id === id)?.nombre;
        ( empleado ) 
            ? resolve(empleado) 
            : reject(`No existe el empleado con id = ${id}`);
    });
}

const getSalario = (id) => {    
    return new Promise((resolve, reject) => {
        const salario = salarios.find( sal => sal.id === id )?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe salario del empleado con id = ${id}`);
    });   
}
const getInfoUsuario = async( id ) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario de ${ empleado } es de ${ salario }`;        
    } catch (error) {
        // return error; // para que funcione el catch despus del then de abajo tenemos que usar THROW en vez de return
        throw error;
    }  
}
const id = 10;

getInfoUsuario( id )
    .then( msg => {
        console.log('TODO BIEN');
        console.log(msg)
    })
    .catch( err => {
        console.log('MAL MUY MAL');
        console.log(err)
    });

