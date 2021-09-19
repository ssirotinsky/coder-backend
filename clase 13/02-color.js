const util = require('util');
const chalk = require('chalk');

class Color {
    constructor(red, green, blue) {
      this.red = red;
      this.green = green;
      this.blue = blue;
    }

    [util.inspect.custom](depth, opts) {
        return `R: ${this.red} - G: ${this.green} - B: ${this.blue}`;
      }

    regenerar(){
      this.red = Math.floor(Math.random() * 256);
      this.green = Math.floor(Math.random() * 256);
      this.blue = Math.floor(Math.random() * 256);
    }
};
 
const saludoColor = (color) => console.log(chalk.rgb(color.red, color.green, color.blue).bold('Hola a tod@s!!!'));

let rojo = new Color(255,0,0);
let verde = new Color(0,255,0);
let azul = new Color(0,0,255);
const blanco = new Color(255,255,255);
const negro = new Color(0,0,0);

console.log('Negro: ', negro);
console.log('Blanco: ', blanco);
saludoColor(rojo);
saludoColor(verde);
saludoColor(azul);

const aleatorio = new Color(0,0,0);
aleatorio.regenerar();
saludoColor(aleatorio);
