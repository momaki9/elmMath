console.log("lesson 1-1")
const contentElm = document.getElementById('content');
const checkBtn = document.getElementById('check-ans');

// function to generate decimals ranging from value1 to value2 with 1, 2 or 3 decimals
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

// write a function that randomly returns one value from an array (array given as param)
const selectNum = function(arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    // console.log(randomValue);
    return randomValue;
};

// function to dislplay the different problems
// addition
for (let i = 0; i < 5; i++) {
    const listEl = document.createElement("li");
    const arr1 = generateNumArr(0.1,3,0.1,1);
    const arr2 = generateNumArr(0.55,1,0.01,2);
    const arr3 = generateNumArr(2.999,3.499,0.001,3)
    const pool1 = arr1.concat(arr2);
    const pool2 = arr2.concat(arr3);
    const firstValue = selectNum(pool1);
    const secondValue = selectNum(pool2)
    let answer = parseFloat(firstValue) + parseFloat(secondValue);
    answer = answer.toFixed(4);
    listEl.textContent = `${firstValue} + ${secondValue} =`;
    contentElm.appendChild(listEl);
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("id", `add-${i}`);
    listEl.appendChild(inputEl);
    const responseEl = document.createElement("span");
    listEl.appendChild(responseEl);
};

// subtraction
for (let i = 0; i < 5; i++) {
    const listEl = document.createElement("li");
    const arr1 = generateNumArr(5.1,7.1,0.1,1);
    const arr2 = generateNumArr(2.55,3,0.01,2);
    const arr3 = generateNumArr(1.199,1.499,0.001,3)
    const pool1 = arr1.concat(arr2);
    const pool2 = arr2.concat(arr3);
    const firstValue = selectNum(pool1);
    const secondValue = selectNum(pool2)
    let answer = parseFloat(firstValue) - parseFloat(secondValue);
    answer = answer.toFixed(4);
    listEl.textContent = `${firstValue} − ${secondValue} =`;
    contentElm.appendChild(listEl);
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("id", `sub-${i}`);
    listEl.appendChild(inputEl);
    const responseEl = document.createElement("span");
    listEl.appendChild(responseEl);
};

// multiplication
for (let i = 0; i < 5; i++) {
    const listEl = document.createElement("li");
    const arr1 = generateNumArr(1.1,3.1,0.1,1);
    const arr2 = generateNumArr(4.19,4.49,0.01,2)
    const pool = arr1.concat(arr2);
    const firstValue = selectNum(pool);
    const secondValue = selectNum(pool)
    let answer = parseFloat(firstValue) * parseFloat(secondValue);
    answer = answer.toFixed(4);
    listEl.textContent = `${firstValue} × ${secondValue} =`;
    contentElm.appendChild(listEl);
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("id", `mult-${i}`);
    listEl.appendChild(inputEl);
    const responseEl = document.createElement("span");
    listEl.appendChild(responseEl);
};

// function to grade the student answer
checkBtn.addEventListener("click", function(){
    const allInputElms = document.querySelectorAll("input");
    const allResponseElems = document.querySelectorAll("span");
    for (let index = 0; index < allInputElms.length; index++) {
        const studentAnswer = Number(allInputElms[index].value).toFixed(4);
        const teacherAnswer = allInputElms[index].getAttribute("data");
        if (studentAnswer == teacherAnswer) {
            allResponseElems[index].textContent = "Nice Job!"
        } else {
            allResponseElems[index].textContent = "Try again!"
        };
    };
});