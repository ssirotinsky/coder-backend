"use strict";

var arr = [2, 5, 6, 10];
arr.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
