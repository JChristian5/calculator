let ac = document.getElementById('ac');
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

let firstNumArr = [];

let secondNumArr = [];

one.addEventListener('click', () => {
    firstNumArr.push(one.value);
    console.log(one.value);
    displayBox.textContent = firstNumArr.join("");
});

two.addEventListener('click', () => {
    firstNumArr.push(two.value);
    console.log(two.value);
    displayBox.textContent = firstNumArr.join("");
});

three.addEventListener('click', () => {
    firstNumArr.push(three.value);
    console.log(three.value);
    displayBox.textContent = firstNumArr.join("");
});

four.addEventListener('click', () => {
    firstNumArr.push(four.value);
    console.log(four.value);
    displayBox.textContent = firstNumArr.join("");
});

five.addEventListener('click', () => {
    firstNumArr.push(five.value);
    console.log(five.value);
    displayBox.textContent = firstNumArr.join("");
});

six.addEventListener('click', () => {
    firstNumArr.push(six.value);
    console.log(six.value);
    displayBox.textContent = firstNumArr.join("");
});

seven.addEventListener('click', () => {
    firstNumArr.push(seven.value);
    console.log(seven.value);
    displayBox.textContent = firstNumArr.join("");
});

eight.addEventListener('click', () => {
    firstNumArr.push(eight.value);
    console.log(eight.value);
    displayBox.textContent = firstNumArr.join("");
});

nine.addEventListener('click', () => {
    firstNumArr.push(nine.value);
    console.log(nine.value);
    displayBox.textContent = firstNumArr.join("");
});

zero.addEventListener('click', () => {
    firstNumArr.push(zero.value);
    console.log(zero.value);
    if(firstNumArr[0] == 0) {
        firstNumArr.shift();
        displayBox.textContent = 0;
    } else {
        displayBox.textContent = firstNumArr.join("");
    }
});