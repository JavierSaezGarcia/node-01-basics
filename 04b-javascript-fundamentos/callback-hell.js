
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


const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( emp => emp.id === id )?.nombre;
    if( empleado ){
        callback(null, empleado);
    }else{
        callback(`Empleado con id = ${ id } no existe`);
    }
    
}

const getSalario = (id, callback) => {
    const salario = salarios.find( sal => sal.id === id )?.salario; // la ? es un nullcheck operator que hace que no interrumpa la ejecucion si no existe
    if( salario ){
        callback(null, salario); 
    }else{
        callback(`Salario con id = ${ id } no existe`);
    }

}
const id = 3;

// console.log( getEmpleado(5) );
getEmpleado(id, ( err, empleado) => {
    if( err ){
        console.log('Error!!!');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if(err){            
            return console.log(err);
        }
        console.log(`El empleado: ${ empleado} tiene un salario de ${salario}`);
        
        
    })
});

