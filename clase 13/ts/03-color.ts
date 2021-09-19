import chalk = require('chalk');

class Color {
    
    red: number;
    green: number;
    blue: number;

    constructor(red, green, blue) {
      this.red = red;
      this.green = green;
      this.blue = blue;
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

saludoColor(rojo);
saludoColor(verde);
saludoColor(azul);

const aleatorio = new Color(0,0,0);
aleatorio.regenerar();
saludoColor(aleatorio);
