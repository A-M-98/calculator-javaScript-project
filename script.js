let output = document.getElementById('output');

let buttons = document.querySelectorAll('.button');
const equalsButton = document.getElementById('#equals');
const allClearButton = document.getElementById('#allClear');
const clearButton = document.getElementById('#clear');
const percentageButton = document.getElementById('#percentage');
const operations = document.querySelectorAll('#operation');
const numbers = document.querySelectorAll('#number');

const calculate = (operator) => {
    let result;
    switch(operator){
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
}