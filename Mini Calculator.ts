const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const addBtn = document.getElementById("add") as HTMLButtonElement
const subtractBtn = document.getElementById("subtract") as HTMLButtonElement
const multiplyBtn = document.getElementById("multiply") as HTMLButtonElement
const divideBtn = document.getElementById("divide") as HTMLButtonElement
const squareBtn = document.getElementById("square") as HTMLButtonElement
const squareRootBtn = document.getElementById("squareRoot") as HTMLButtonElement
const resetBtn = document.getElementById("reset") as HTMLButtonElement

const printResult =document.getElementById("result") as HTMLOutputElement 

function Addnumbers(){  
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click",Addnumbers);


function Subtractnumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printResult.textContent = result.toString();

}
subtractBtn.addEventListener("click",Subtractnumbers);

function Multiplnumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printResult.textContent = result.toString();

}
multiplyBtn.addEventListener("click", Multiplnumbers);

function Dividnumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    if(b !== 0){
    let result = a/b;

    printResult.textContent = result.toString();
    }
    else{
        printResult.textContent = "Cannot divide by zero"
    }

}
divideBtn.addEventListener("click",Dividnumbers);

function Square(){
    let a = parseFloat(number1.value)
    let result = a*a 

    printResult.textContent = result.toString();

}
squareBtn.addEventListener("click",Square);

function SquareRoot(){
    let a = parseFloat(number1.value)
    if(a >= 0){
        let result = Math.sqrt(a);

        printResult.textContent = result.toString();
    }
    else{
        printResult.textContent = "Sorry this number have not saqure Root."
    }
}
squareRootBtn.addEventListener("click",SquareRoot);

function reset(){
    number1.value = '';
    number2.value = '';
    printResult.textContent = ''
}
resetBtn.addEventListener("click",reset)


 