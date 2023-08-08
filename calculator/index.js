const inputSelector = document.querySelector('.input');

function setValue(val) {
    inputSelector.value += val;
}

let currentSymbol = '';

function clean() {
    inputSelector.value = "";
}

function del() {
    let str = "";
    let currStr = inputSelector.value;
    for(let i = 0; i < currStr.length - 1; i++) {
        str += currStr.charAt(i);
    }
    inputSelector.value = str;
}

function setSymbol (symbol) {
    if(currentSymbol != '') {
        del();
        equal();
        inputSelector.value += symbol
    }
    currentSymbol = symbol;
    console.log(currentSymbol);
}

function equal() {
    let num1 = "";
    let num2 = "";
    let val = inputSelector.value;
    let idx = 0;
    while(val.charAt(idx) != currentSymbol) {
        num1 += val.charAt(idx++);
    }
    idx++;
    while(idx < val.length) {
        num2 += val.charAt(idx++);
    }

    num1 = Number(num1);
    num2 = Number(num2);

    inputSelector.value = computation(num1, num2);
    currentSymbol = "";

}

function computation(val1, val2) {

    if(currentSymbol === '+') {
        return val1 + val2;
    } else if(currentSymbol === '-') {
        console.log('- executed');
        return val1 - val2;
    } else if(currentSymbol === '*') {
        return val1 * val2;
    } else {
        return val1 / val2;
    }
}