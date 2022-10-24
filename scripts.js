function add(a, b) {
	return a+b;
};
function subtract(a,b) {
	return a-b;
};
function multiply(a,b) {
	return a*b;
};
function divide(a,b) {
    if(b==0){
        return "Error: /0";
    } else{
        result = a/b;
        resultStr = String(a/b);
        if (resultStr.includes('.')) {
            if (resultStr.split('.')[1].length > 4) {
                newResult = Number(resultStr.split('.')[0] + "." + resultStr.split('.')[1].slice(0,4));
                return newResult;
            }
         };
        return a/b;
    }
};
function operate(op, a, b){
    return op(a,b);
}
let displayVal = 0;
let a;
let b;
let op;
const display = document.querySelector('#display');
const numBtns = document.querySelectorAll('.num');
numBtns.forEach((numBtn)=>{
    numBtn.addEventListener('click', () => {
        if(displayVal == 0){
            display.textContent=(numBtn.textContent);
        } else {
            display.textContent+=(numBtn.textContent);
        }
        displayVal = Number(display.textContent);
    })
});
const opBtns = document.querySelectorAll('.operators');
opBtns.forEach((opBtn)=>{
    opBtn.addEventListener('click', () => {
        displayVal = Number(display.textContent);
        if (opBtn.textContent == "C"){
            displayVal = 0;
            a = undefined;
            b = undefined;
            op = undefined;
            display.textContent="0";
        } else if (opBtn.textContent == "="){
            if (op == undefined) {
                a = displayVal;
                displayVal = 0;
            } else {
                b = displayVal;
                display.textContent = operate(op, a, b);
                a = undefined;
                b = undefined;
                op = undefined;
                displayVal = 0;
            }
        } else {
            if (op == undefined) {
                a = displayVal;
                assignOp(opBtn.textContent);
                displayVal = 0;
            } else {
                b = displayVal;
                display.textContent = operate(op, a, b);
                a = Number(display.textContent);
                assignOp(opBtn.textContent);
                b = undefined;
                displayVal = 0;
            }
        }
    })
});
function assignOp(opStr){
    switch (opStr) {
        case "+":
            op = add;
            break;
        case "-":
            op = subtract;
            break;
        case "*":
            op = multiply;
            break;
        case "/":
            op = divide;
            break;
    }
}
