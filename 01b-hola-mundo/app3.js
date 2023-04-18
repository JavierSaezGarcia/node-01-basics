
console.log('Inicio de programa'); // 1


setTimeout(() => {
    console.log('Primer timeout ... 3 seg');// 5
},3000);
setTimeout(() => {
    console.log('Segndo timeout ... 0 seg');// 2
},0);
setTimeout(() => {
    console.log('Tercer timeout ... 0 seg');// 3
},0);

console.log('Fin de programa');// 4
console.log('Todo el contenido 1, 2, 3 4 al no ser bloqueante se ejecutara a la vez en forma de pila de ejecucion osea uno detras de otro y solo espera el 5 porque le hemos dicho que espere 3 seg');

