'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');
var chalk = require('chalk');

var Color = function () {
    function Color(red, green, blue) {
        _classCallCheck(this, Color);

        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    _createClass(Color, [{
        key: util.inspect.custom,
        value: function value(depth, opts) {
            return 'R: ' + this.red + ' - G: ' + this.green + ' - B: ' + this.blue;
        }
    }, {
        key: 'regenerar',
        value: function regenerar() {
            this.red = Math.floor(Math.random() * 256);
            this.green = Math.floor(Math.random() * 256);
            this.blue = Math.floor(Math.random() * 256);
        }
    }]);

    return Color;
}();

;

var saludoColor = function saludoColor(color) {
    return console.log(chalk.rgb(color.red, color.green, color.blue).bold('Hola a tod@s!!!'));
};

var rojo = new Color(255, 0, 0);
var verde = new Color(0, 255, 0);
var azul = new Color(0, 0, 255);
var blanco = new Color(255, 255, 255);
var negro = new Color(0, 0, 0);

console.log('Negro: ', negro);
console.log('Blanco: ', blanco);
saludoColor(rojo);
saludoColor(verde);
saludoColor(azul);

var aleatorio = new Color(0, 0, 0);
aleatorio.regenerar();
saludoColor(aleatorio);
