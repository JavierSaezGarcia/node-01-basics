
  console.log('Primer log que en la pila de ejecucion sera el primero');
  setTimeout(() => {
    console.log('Primer setTimeout 5 seg');
  }, 5000);
   
  setTimeout(() => {
    console.log('Segundo setTimeout 2seg');
  }, 2000);
   
  setTimeout(() => {
    console.log('Tercer setTimeout 7 seg');
  }, 7000);
  setTimeout(() => {
    console.log('Cuarto setTimeout 0.5 seg');
  }, 500);
  setTimeout(() => {
    console.log('Sexto setTimeout sin espera pero apilado en tercer lugar y lo pongo antes del quinto para demostrar que a igual espera de todos los timeouts queda este primero por estar antes en la linea de ejecucion 0 seg');
  }, 0);
  setTimeout(() => {
    console.log('Quinto setTimeout sin espera 0 seg pero ejecutado en cuarto lugar');
  }, 0);

  console.log('Ultimo log que en la pila sera el segundo');
  
