// TOMORROW
// CHANGE For zero, if first num is zero, second number cannot be zero
// if/else for first/second array add?

let ce = document.getElementById('ce');
let c = document.getElementById('c');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let equal = document.getElementById('equal');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let displayBox = document.getElementById('displayBox');
let topText = document.getElementById('topText');
let bottomText = document.getElementById('bottomText');
let decimal = document.getElementById('decimal');

let firstNumArr = [];

let secondNumArr = [];

let operation = null;

let answer = 0;

one.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(one.value);
        console.log(one.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(one.value);
        console.log(one.value);
        bottomText.textContent = secondNumArr.join("");
        if(secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        }
    }
});

two.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(two.value);
        console.log(two.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(two.value);
        console.log(two.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        }
    }
});

three.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(three.value);
        console.log(three.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(three.value);
        console.log(three.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        }
    }
});

four.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(four.value);
        console.log(four.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(four.value);
        console.log(four.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        }
    }
});

five.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(five.value);
        console.log(five.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(five.value);
        console.log(five.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        } 
    }
});

six.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(six.value);
        console.log(six.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(six.value);
        console.log(six.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        } 
    }  
});

seven.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(seven.value);
        console.log(seven.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(seven.value);
        console.log(seven.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        } 
    }
});

eight.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(eight.value);
        console.log(eight.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(eight.value);
        console.log(eight.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        } 
    }
});

nine.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(nine.value);
        console.log(nine.value);
        bottomText.textContent = firstNumArr.join("");
        if(firstNumArr[0] == 0 && firstNumArr[1] != '.') {
            firstNumArr.shift();
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(nine.value);
        console.log(nine.value);
        bottomText.textContent = secondNumArr.join("");
        if (secondNumArr[0] == 0 && secondNumArr[1] != '.') {
            secondNumArr.shift();
            bottomText.textContent = secondNumArr.join("");
        } 
    }
});

zero.addEventListener('click', () => {
    if (operation == null) {
        firstNumArr.push(zero.value);
        console.log(zero.value);
        if (firstNumArr[0] == 0 && firstNumArr[1] == 0) {
            firstNumArr.pop();
        } else {
            bottomText.textContent = firstNumArr.join("");
        }
    } else if (operation != null) {
        secondNumArr.push(zero.value);
        console.log(zero.value);
        if (secondNumArr[0] == 0 && secondNumArr[1] == 0) {
            secondNumArr.pop();
        } else {
            bottomText.textContent = secondNumArr.join("");
        }
    }
});

decimal.addEventListener('click', () => {
    if (operation == null) {
        if(firstNumArr == []) {
            firstNumArr.push(0);
            firstNumArr.push('.');
            decimal.disabled = true;       
        } else {
            firstNumArr.push('.');
            bottomText.textContent = firstNumArr.join("");
            decimal.disabled = true;
        }
    } else if (operation != null) {
        if(secondNumArr == []) {
            secondNumArr.push(0);
            secondNumArr.push('.');
            decimal.disabled = true;
        } else {
            secondNumArr.push('.');
            bottomText.textContent = secondNumArr.join("");
            decimal.disabled = true;
        }
    }
    
});

add.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} +`;
        bottomText.textContent = 0;
        operation = 'add';
        decimal.disabled = false;
    } else {
        return;
    }
});

subtract.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} -`;
        bottomText.textContent = 0;
        operation = 'subtract';
        decimal.disabled = false;
    } else {
        return;
    }
});

multiply.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} x`;
        bottomText.textContent = 0;
        operation = 'multiply';
        decimal.disabled = false;
    } else {
        return;
    }
});

divide.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} ÷`;
        bottomText.textContent = 0;
        operation = 'divide';
        decimal.disabled = false;
    } else {
        return;
    }
});

equal.addEventListener('click', () => {
    if (operation == null || secondNumArr == []) {
        return;
    } else if (operation == 'add') {
        topText.textContent = `${firstNumArr.join("")} + ${secondNumArr.join("")} =`;
        answer = parseFloat(firstNumArr.join("")) + parseFloat(secondNumArr.join(""));
        bottomText.textContent = `${answer}`;
    } else if (operation == 'subtract') {
        topText.textContent = `${firstNumArr.join("")} - ${secondNumArr.join("")} =`;
        answer = parseFloat(firstNumArr.join("")) - parseFloat(secondNumArr.join(""));
        bottomText.textContent = `${answer}`;
    } else if (operation == 'multiply') {
        topText.textContent = `${firstNumArr.join("")} x ${secondNumArr.join("")} =`;
        answer = parseFloat(firstNumArr.join("")) * parseFloat(secondNumArr.join(""));
        bottomText.textContent = `${answer}`;
    } else if (operation == 'divide' && secondNumArr == 0) {
        bottomText.textContent = `Error, can not divide by 0!`;
    } else if (operation == 'divide') {
        topText.textContent = `${firstNumArr.join("")} ÷ ${secondNumArr.join("")} =`;
        answer = parseFloat(firstNumArr.join("")) / parseFloat(secondNumArr.join(""));
        bottomText.textContent = `${answer}`;
    }
});

c.addEventListener('click', () => {
    firstNumArr = [];
    secondNumArr = [];
    operation = null;
    answer = 0;
    topText.textContent = ``;
    bottomText.textContent = `0`;
});