let output = document.getElementById('output');

let buttons = document.querySelectorAll('.button');
const equalsButton = document.getElementById('#equals');
const allClearButton = document.getElementById('#allClear');
const clearButton = document.getElementById('#clear');
const percentageButton = document.getElementById('#percentage');
const operations = document.querySelectorAll('#operation');
const numbers = document.querySelectorAll('#number');

const calculate = () => {
        //MAKE TWO ARRAYS FOR THE NUMBERS AND OPERATORS
    //USE THOSE TWO ARRAYS TO CARRY OUT MULTIPLE EQUATIONS AT ONCE.
    
    let currentDigits = []
    const operators = ["+", "-", "/", "*"];
    let currentOperators = [];
    // operators.forEach((operator) => {
    //    if(output.innerText.indexOf(operator) > 0) {
    //     currentOperator = operator;
    //    };
    // })
    // const operatorIndex = output.innerText.indexOf(currentOperator);

    let equation = output.innerText;
    for (let index = 0; index < output.innerText.length; index++) {
        const character = equation[index]
        if(character === operators[0] || character === operators[1] || character === operators[2] || character === operators[3]){
            currentOperators.push(character);
            const newEquation = equation.replace(character, " ");
            equation = newEquation;
        }
    }
    currentDigits = equation.split(" ");
    let firstNum = currentDigits[0];
    let secondNum = currentDigits[1];
    let thirdNum = currentDigits[2];

    let firstOperator = currentOperators[0];
    let secondOperator = currentOperators[1];

    // if(firstOperator == "+"){
    //     firstResult = (Number(firstNum) + Number(secondNum))
    // } else if ()

    console.log(firstOperator)
    console.log(secondOperator);

    console.log(firstNum);
    console.log(secondNum);
    console.log(thirdNum);
    //LOOP THROUGH AND GET THE FIRST ITEM FROM THE CURRENTDIGITS ARRAY AND 

    console.log(currentDigits);
    console.log(currentOperators);
    // currentDigits = 

    // console.log(currentOperator);
    // const firstNum = output.innerText.slice(0, (operatorIndex));
    // const secondNum = output.innerText.slice(operatorIndex + 1);
    // console.log(firstNum);
    // console.log(secondNum);

    
    let result;
    switch(firstOperator){
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

    switch(secondOperator){
        case "+":
            result =  result + Number(thirdNum);
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
}

buttons.forEach( button => {
    button.addEventListener('click', (event) => {
        switch(event.target.innerText){
            case 'AC':
                output.innerText = '';
                break;
            case 'C':
                if (output.innerText){
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            case '%':
                output.innerText = (output.innerText / 100);
                break;
            case '=':
                const finalResult = calculate();
                output.innerText = finalResult;
                break;
            default:
                output.innerText += event.target.innerText;
        }
    });
});