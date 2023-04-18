const direccion = 'https://nodejs.org/api/os.html';
const os = require('os');

console.log(os.type()); // Devuelve el nombre del sistema operativo . Por ejemplo, regresa 'Linux'en Linux, 'Darwin'en macOS y 'Windows_NT'en Windows.
console.log(os.homedir()); // path del home del sistema operativo C:\Users\JAVIER
console.log(os.uptime()); // Devuelve el tiempo de actividad del sistema en número de segundos.

