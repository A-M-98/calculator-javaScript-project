"use strict";

var output = document.getElementById('output');
var buttons = document.querySelectorAll('.button');
var equalsButton = document.getElementById('#equals');
var allClearButton = document.getElementById('#allClear');
var clearButton = document.getElementById('#clear');
var percentageButton = document.getElementById('#percentage');
var operations = document.querySelectorAll('#operation');
var numbers = document.querySelectorAll('#number');

var calculate = function calculate() {
  //MAKE TWO ARRAYS FOR THE NUMBERS AND OPERATORS
  //USE THOSE TWO ARRAYS TO CARRY OUT MULTIPLE EQUATIONS AT ONCE.
  var currentDigits = [];
  var operators = ["+", "-", "/", "*"];
  var currentOperators = []; // operators.forEach((operator) => {
  //    if(output.innerText.indexOf(operator) > 0) {
  //     currentOperator = operator;
  //    };
  // })
  // const operatorIndex = output.innerText.indexOf(currentOperator);

  var equation = output.innerText;

  for (var index = 0; index < output.innerText.length; index++) {
    var character = equation[index];

    if (character === operators[0] || character === operators[1] || character === operators[2] || character === operators[3]) {
      currentOperators.push(character);
      var newEquation = equation.replace(character, " ");
      equation = newEquation;
    }
  }

  currentDigits = equation.split(" ");
  var firstNum = currentDigits[0];
  var secondNum = currentDigits[1];
  var thirdNum = currentDigits[2];
  var firstOperator = currentOperators[0];
  var secondOperator = currentOperators[1]; // if(firstOperator == "+"){
  //     firstResult = (Number(firstNum) + Number(secondNum))
  // } else if ()

  console.log(firstOperator);
  console.log(secondOperator);
  console.log(firstNum);
  console.log(secondNum);
  console.log(thirdNum); //LOOP THROUGH AND GET THE FIRST ITEM FROM THE CURRENTDIGITS ARRAY AND 

  console.log(currentDigits);
  console.log(currentOperators); // currentDigits = 
  // console.log(currentOperator);
  // const firstNum = output.innerText.slice(0, (operatorIndex));
  // const secondNum = output.innerText.slice(operatorIndex + 1);
  // console.log(firstNum);
  // console.log(secondNum);

  var result;

  switch (firstOperator) {
    case "+":
      result = Number(firstNum) + Number(secondNum);
      console.log("+");
      break;

    case "-":
      result = Number(firstNum) - Number(secondNum);
      console.log("-");
      break;

    case "/":
      result = Number(firstNum) / Number(secondNum);
      console.log("/");
      break;

    case "*":
      result = Number(firstNum) * Number(secondNum);
      console.log("*");
      break;
  }

  switch (secondOperator) {
    case "+":
      result = result + Number(thirdNum);
      console.log("+");
      break;

    case "-":
      result = result - Number(thirdNum);
      console.log("-");
      break;

    case "/":
      result = result / Number(thirdNum);
      console.log("/");
      break;

    case "*":
      result = result * Number(thirdNum);
      console.log("*");
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
        var finalResult = calculate();
        output.innerText = finalResult;
        break;

      default:
        output.innerText += event.target.innerText;
    }
  });
});