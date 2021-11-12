// console.log(process.env);


// Mediante dotenv podemos agregar variables a process.env
require('dotenv').config({ path: './config/.env' })
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);