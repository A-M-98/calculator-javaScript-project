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
                const finalResult = calculate(output.innerText[1]);
                output.innerText = finalResult;
                break;
            default:
                output.innerText += event.target.innerText;
        }
    });
});