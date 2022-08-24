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
      result = Number(output.innerText[0]) - Number(output.innerText[2]);
      console.log("-");
      break;

    case "÷":
      result = Number(output.innerText[0]) / Number(output.innerText[2]);
      console.log("÷");
      break;

    case "×":
      result = Number(output.innerText[0]) * Number(output.innerText[2]);
      console.log("×");
      break;
  }

  return result;
};

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    switch (event.target.innerText) {
      case 'AC':
        output.innerText = '';
        break;

      case 'C':
        if (output.innerText) {
          output.innerText = output.innerText.slice(0, -1);
        }

        break;

      case '%':
        output.innerText = output.innerText / 100;
        break;

      case '=':
        var finalResult = calculate(output.innerText[1]);
        output.innerText = finalResult;
        break;

      default:
        output.innerText += event.target.innerText;
    }
  });
});