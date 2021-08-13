const textoPrueba = '    Probando los distintos Trim      ';
console.log(textoPrueba.split(''));
console.log(textoPrueba.split('').filter(e=>e != ' ').join(''));
console.log(textoPrueba + 'f');
console.log(textoPrueba.trim() + 'f');
console.log(textoPrueba.trimStart() + 'f');
console.log(textoPrueba.trimEnd() + 'f');