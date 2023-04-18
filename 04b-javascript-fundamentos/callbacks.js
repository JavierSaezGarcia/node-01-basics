


// setTimeout( () => {
//     console.log('Hola mundo!');
// },1000);

// setTimeout(() => console.log('Hola mundo!') ,1000);

const getUsuarioByID = ( id, callback ) => {
    const user = {
        id, // id:id
        nombre: 'Javier'
    }
    setTimeout(() => callback( user ),1500);
}
getUsuarioByID(10, ( usuario ) => {
    console.log(usuario.id, usuario.nombre);
});