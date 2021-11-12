// console.log(process);

console.log(`Directorio actual: ${process.cwd()}`);
console.log(`Id del proceso: ${process.pid}`);
console.log(`Versión de Node: ${process.version}`);
console.log(`Título del proceso: ${process.title}`);
console.log(`Sistema Operativo: ${process.platform}`);
console.log(process.memoryUsage());

