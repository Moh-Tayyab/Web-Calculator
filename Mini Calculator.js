"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const squareBtn = document.getElementById("square");
const squareRootBtn = document.getElementById("squareRoot");
const resetBtn = document.getElementById("reset");
const printResult = document.getElementById("result");
function Addnumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click", Addnumbers);
function Subtractnumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printResult.textContent = result.toString();
}
subtractBtn.addEventListener("click", Subtractnumbers);
function Multiplnumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    printResult.textContent = result.toString();
}
multiplyBtn.addEventListener("click", Multiplnumbers);
function Dividnumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    if (b !== 0) {
        let result = a / b;
        printResult.textContent = result.toString();
    }
    else {
        printResult.textContent = "Cannot divide by zero";
    }
}
divideBtn.addEventListener("click", Dividnumbers);
function Square() {
    let a = parseFloat(number1.value);
    let result = a * a;
    printResult.textContent = result.toString();
}
squareBtn.addEventListener("click", Square);
function SquareRoot() {
    let a = parseFloat(number1.value);
    if (a >= 0) {
        let result = Math.sqrt(a);
        printResult.textContent = result.toString();
    }
    else {
        printResult.textContent = "Sorry this number have not saqure Root.";
    }
}
squareRootBtn.addEventListener("click", SquareRoot);
function reset() {
    number1.value = '';
    number2.value = '';
    printResult.textContent = '';
}
resetBtn.addEventListener("click", reset);
