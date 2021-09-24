"use strict";

var lista = [2, 3, 5, 7, 8];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
