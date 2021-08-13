const delay = ret => {
    for(let i=0; i<ret*3e6;i++);
}

function hacerTarea(num) {
    console.log('haciendo tarea' + num);
    delay (500);
}

console.log('inicio de tareas');
hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
hacerTarea(4);
hacerTarea(5);
console.log('fin de tareas');
console.log('otras tareas');

