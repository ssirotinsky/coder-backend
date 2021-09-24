"use strict";
exports.__esModule = true;
var chalk = require("chalk");
// const chalk = require('chalk');
var Color = /** @class */ (function () {
    function Color(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    Color.prototype.regenerar = function () {
        this.red = Math.floor(Math.random() * 256);
        this.green = Math.floor(Math.random() * 256);
        this.blue = Math.floor(Math.random() * 256);
    };
    return Color;
}());
;
var saludoColor = function (color) { return console.log(chalk.rgb(color.red, color.green, color.blue).bold('Hola a tod@s!!!')); };
var rojo = new Color(255, 0, 0);
var verde = new Color(0, 255, 0);
var azul = new Color(0, 0, 255);
saludoColor(rojo);
saludoColor(verde);
saludoColor(azul);
var aleatorio = new Color(0, 0, 0);
aleatorio.regenerar();
saludoColor(aleatorio);
