"use strict";

var output = document.getElementById('output');
var buttons = document.querySelectorAll('.button');
var equalsButton = document.getElementById('#equals');
var allClearButton = document.getElementById('#allClear');
var clearButton = document.getElementById('#clear');
var percentageButton = document.getElementById('#percentage');
var operations = document.querySelectorAll('#operation');
var numbers = document.querySelectorAll('#number');

var calculate = function calculate(operator) {
  var result;

  switch (operator) {
    case "+":
      result = Number(output.innerText[0]) + Number(output.innerText[2]);
      console.log("+");
      break;

    case "-":
      console.log("-");
      break;

    case "÷":
      console.log("÷");
      break;

    case "×":
      console.log("×");
      break;
  }

  return result;
};