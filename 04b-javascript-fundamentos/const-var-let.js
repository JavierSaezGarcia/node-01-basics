
/** VAR */
var nombre = 'Lobo';
if(true){
    var nombre = 'Gato';    
}
console.log('VAR no respeta los ambitos y resultará Gato como nombre: ', nombre);
/**   LET          */
let nombre2 = 'Lobo';
if(true){
    let nombre2 = 'Gato';    
}
console.log('LET si respeta los ambitos y resultará Lobo como nombre: ', nombre2);

/** Actualizar LET */
let nombre3 = 'Lobo';
if(true){
    nombre3 = 'Gato';    
}
console.log('mostrara Gato porque he redeclarado la variable nombre3 dentro del if: ', nombre3);

/** CONST */
const nombre4 = 'Lobo';
if(true){
   // nombre4 = 'Gato'; // Error
    const nombre4 = 'Gato'; // Es la misma referencia pero que apunta a otro lugar en memoria   
}
console.log('mostrara Lobo porque la variable nombre4 dentro del if no se muestra por estar en un ambito difeerente: ', nombre4);

/** Aberracion: se usa la variable antes de declararla */
nombre5 = 'Lobo';
if(true){
    nombre5 = 'Gato';    
}

var nombre5;
console.log('se ejecuta antes de decjarar variable con var por esto es una aberracion: ', nombre5);

nombre6 = 'Lobo';
console.log(nombre6);











var nombre6;
nombre6 = 'Felino' // No se vera