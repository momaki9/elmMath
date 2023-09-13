// write a function that generates a list of numbers from num1 to num2, given an incrementor (inc) and number of decimals
const generateNumArr = function (num1, num2, inc, dec) {
    let numArray = [];
    if (num1 == num2) {
        return;
    };
    if (num2 > num1) {
        for (let index = num1; index <= num2; index += inc) {
            numArray.push(index.toFixed(dec));
        }
    } else {
        for (let i = num1; i >= num2; i -= inc) {
            numArray.push(i.toFixed(dec));
        }
    };
    return numArray;
};

const randomNumOfDecimals = [1, 2, 3];

// generateNumArr(19, 21, 0.1, 1);

// write a function that randomly returns one value from an array (array given as param)
const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
};

const contentElm1 = document.getElementById('extra-content-1');
const checkBtn = document.getElementById('check-ans');

for (let i = 0; i < 4; i++) {
    const listEl1 = document.createElement("li");
    const numArray1 = generateNumArr(9,30,0.01,2);
    const numArray2 = generateNumArr(3,41,0.001,3);
    const numArray3 = generateNumArr(1,9,0.1,1);
    const firstValue = selectNum(numArray1);
    const secondValue = selectNum(numArray2);
    const thirdValue = selectNum(numArray3);
    let answer = parseFloat(firstValue) + parseFloat(secondValue)+ parseFloat(thirdValue);
    answer = answer.toFixed(1);
    listEl1.textContent = `${firstValue} + ${secondValue} + ${thirdValue} =`;
    contentElm1.appendChild(listEl1);
    const inputEl1 = document.createElement("input");
    inputEl1.setAttribute("data", answer);
    inputEl1.setAttribute("id", `add1-${i}`);
    listEl1.appendChild(inputEl1);
    const responseEl1 = document.createElement("span");
    listEl1.appendChild(responseEl1);
};

for (let i = 4; i < 8; i++) {
    const listEl1 = document.createElement("li");
    const numArray1 = generateNumArr(29,39,0.01,2);
    const numArray2 = generateNumArr(23,41,0.001,3);
    const numArray3 = generateNumArr(5,30,0.1,1);
    const firstValue = selectNum(numArray1);
    const secondValue = selectNum(numArray2);
    const thirdValue = selectNum(numArray3);
    let answer = parseFloat(firstValue) + parseFloat(secondValue) - parseFloat(thirdValue);
    answer = answer.toFixed(1);
    listEl1.textContent = `${firstValue} + ${secondValue} − ${thirdValue} =`;
    contentElm1.appendChild(listEl1);
    const inputEl1 = document.createElement("input");
    inputEl1.setAttribute("data", answer);
    inputEl1.setAttribute("id", `sub1-${i}`);
    listEl1.appendChild(inputEl1);
    const responseEl1 = document.createElement("span");
    listEl1.appendChild(responseEl1);
};

const contentElm2 = document.getElementById('extra-content-2');

for (let i = 0; i < 4; i++) {
    const listEl2 = document.createElement("li");
    const numArray1 = generateNumArr(1,12,0.01,2);
    const numArray2 = generateNumArr(16,42,0.001,3);
    const numArray3 = generateNumArr(38,91,0.001,3);
    const firstValue = selectNum(numArray1);
    const secondValue = selectNum(numArray2);
    const thirdValue = selectNum(numArray3);
    let answer = parseFloat(firstValue) + parseFloat(secondValue)+ parseFloat(thirdValue);
    answer = answer.toFixed(1);
    listEl2.textContent = `${firstValue} + ${secondValue} + ${thirdValue} =`;
    contentElm2.appendChild(listEl2);
    const inputEl2 = document.createElement("input");
    inputEl2.setAttribute("data", answer);
    inputEl2.setAttribute("id", `add2-${i}`);
    listEl2.appendChild(inputEl2);
    const responseEl2 = document.createElement("span");
    listEl2.appendChild(responseEl2);
};

for (let i = 4; i < 8; i++) {
    const listEl2 = document.createElement("li");
    const numArray1 = generateNumArr(12,30,0.01,2);
    const numArray2 = generateNumArr(8,14,0.001,3);
    const numArray3 = generateNumArr(7,22,0.001,3);
    const firstValue = selectNum(numArray1);
    const secondValue = selectNum(numArray2);
    const thirdValue = selectNum(numArray3);
    let answer = parseFloat(firstValue) + parseFloat(secondValue) - parseFloat(thirdValue);
    answer = answer.toFixed(1);
    listEl2.textContent = `${firstValue} + ${secondValue} − ${thirdValue} =`;
    contentElm2.appendChild(listEl2);
    const inputEl2 = document.createElement("input");
    inputEl2.setAttribute("data", answer);
    inputEl2.setAttribute("id", `sub2-${i}`);
    listEl2.appendChild(inputEl2);
    const responseEl2 = document.createElement("span");
    listEl2.appendChild(responseEl2);
};

checkBtn.addEventListener("click", function(){
    const allInputElms = document.querySelectorAll("input");
    const allResponseElems = document.querySelectorAll("span");
    for (let index = 0; index < allInputElms.length; index++) {
        const studentAnswer = allInputElms[index].value;
        const teacherAnswer = allInputElms[index].getAttribute("data");
        if (studentAnswer == teacherAnswer) {
            allResponseElems[index].textContent = "Nice Job!"
        } else {
            allResponseElems[index].textContent = "Try again!"
        };
    };
});