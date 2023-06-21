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
let topText = document.getElementById('topText');
let bottomText = document.getElementById('bottomText');

let firstNumArr = [];

let secondNumArr = [];

one.addEventListener('click', () => {
    // if(topText != "") {
    //     secondNumArr.push(one.value);
    //     console.log(one.value);
    //     bottomText.textContent = secondNumArr.join("");
    // } else {
        firstNumArr.push(one.value);
        console.log(one.value);
        bottomText.textContent = firstNumArr.join("");
    // }
});

two.addEventListener('click', () => {
    firstNumArr.push(two.value);
    console.log(two.value);
    bottomText.textContent = firstNumArr.join("");
});

three.addEventListener('click', () => {
    firstNumArr.push(three.value);
    console.log(three.value);
    bottomText.textContent = firstNumArr.join("");
});

four.addEventListener('click', () => {
    firstNumArr.push(four.value);
    console.log(four.value);
    bottomText.textContent = firstNumArr.join("");
});

five.addEventListener('click', () => {
    firstNumArr.push(five.value);
    console.log(five.value);
    bottomText.textContent = firstNumArr.join("");
});

six.addEventListener('click', () => {
    firstNumArr.push(six.value);
    console.log(six.value);
    bottomText.textContent = firstNumArr.join("");
});

seven.addEventListener('click', () => {
    firstNumArr.push(seven.value);
    console.log(seven.value);
    bottomText.textContent = firstNumArr.join("");
});

eight.addEventListener('click', () => {
    firstNumArr.push(eight.value);
    console.log(eight.value);
    bottomText.textContent = firstNumArr.join("");
});

nine.addEventListener('click', () => {
    firstNumArr.push(nine.value);
    console.log(nine.value);
    bottomText.textContent = firstNumArr.join("");
});

zero.addEventListener('click', () => {
    firstNumArr.push(zero.value);
    console.log(zero.value);
    if(firstNumArr[0] == 0) {
        firstNumArr.shift();
        bottomText.textContent = 0;
    } else {
        bottomText.textContent = firstNumArr.join("");
    }
});

add.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} +`;
        bottomText.textContent = 0;
    } else {
        return;
    }
});

subtract.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} -`;
        bottomText.textContent = 0;
    } else {
        return;
    }
});

multiply.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} x`;
        bottomText.textContent = 0;
    } else {
        return;
    }
});

divide.addEventListener('click', () => {
    if(firstNumArr != 0) {
        topText.textContent = `${firstNumArr.join("")} ÷`;
        bottomText.textContent = 0;
    } else {
        return;
    }
});