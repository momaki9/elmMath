console.log("review")
const contentAdd = document.getElementById('content-add');
const contentSub = document.getElementById('content-sub');
const contentMul = document.getElementById('content-mul');
const contentDiv = document.getElementById('content-div');
const contentArr = [contentAdd, contentSub, contentMul, contentDiv];
const contentArrStri = ["contentAdd", "contentSub", "contentMul", "contentDiv"];
const operations = ["+", "−", "×", "÷"]
const checkBtn = document.getElementById('check-ans');

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

const oneDigitArr = generateNumArr(2, 9, 1, 0);
const twoDigitArr = generateNumArr(10, 99, 1, 0);
const threeDigitArr = generateNumArr(100, 999, 1, 0);
const fourDigitArrv1 = generateNumArr(1000, 4999, 1, 0);
const fourDigitArrv2 = generateNumArr(5000, 9999, 1, 0);

// write a function that randomly returns one value from an array (array given as param)
const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    // console.log(randomValue);
    return randomValue;
};

for (var i = 0; i < contentArr.length; i++) {
    for (var j = 0; j < 3; j++) {
        const elm = document.createElement("li");
        elm.setAttribute("id", `${contentArrStri[i]}-${j}`)
        // elm.textContent = `${contentArrStri[i]}-${j}`;
        contentArr[i].appendChild(elm)
    }
}

// addition
for (var i = 0; i < 3; i++) {
    let value1 = selectNum(fourDigitArrv1);
    let value2 = selectNum(fourDigitArrv2);
    let answer = Number(value1) + Number(value2);
    var elm = document.getElementById(`contentAdd-${i}`);
    elm.textContent = `${value1} ${operations[0]} ${value2} = `;
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("class", "my-answer");
    inputEl.setAttribute("id", `add-${i}`);
    elm.appendChild(inputEl);
    const responseEl = document.createElement("span");
    responseEl.setAttribute("class", "my-response");
    elm.appendChild(responseEl);
}

// subtraction
for (var i = 0; i < 3; i++) {
    let value1 = selectNum(fourDigitArrv1);
    let value2 = selectNum(fourDigitArrv2);
    let answer = Number(value2) - Number(value1);
    var elm = document.getElementById(`contentSub-${i}`);
    elm.textContent = `${value2} ${operations[1]} ${value1} = `;
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("class", "my-answer")
    inputEl.setAttribute("id", `sub-${i}`);
    elm.appendChild(inputEl);
    const responseEl = document.createElement("span");
    responseEl.setAttribute("class", "my-response");
    elm.appendChild(responseEl);
}

// multiply
for (var i = 0; i < 3; i++) {
    let value1 = selectNum(threeDigitArr.concat(twoDigitArr));
    let value2 = selectNum(twoDigitArr);
    let answer = Number(value1) * Number(value2);
    var elm = document.getElementById(`contentMul-${i}`);
    elm.textContent = `${value1} ${operations[2]} ${value2} = `;
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("class", "my-answer");
    inputEl.setAttribute("id", `mul-${i}`);
    elm.appendChild(inputEl);
    const responseEl = document.createElement("span");
    responseEl.setAttribute("class", "my-response");
    elm.appendChild(responseEl);
}

// divide
for (var i = 0; i < 3; i++) {
    let value1 = selectNum(threeDigitArr.concat(fourDigitArrv1));
    let value2 = selectNum(twoDigitArr.concat(oneDigitArr));
    let answer = Number(value1) / Number(value2);
    answer = answer.toFixed(4)
    var elm = document.getElementById(`contentDiv-${i}`);
    elm.textContent = `${value1} ${operations[3]} ${value2} = `;
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("class", "my-answer")
    inputEl.setAttribute("id", `div-${i}`);
    elm.appendChild(inputEl);
    const responseEl = document.createElement("span");
    responseEl.setAttribute("class", "my-response");
    elm.appendChild(responseEl);
};

const fractionElm = document.getElementById("fractionElm");
const numeratorArr = generateNumArr(1, 4, 1, 0);
const denominatorArr = generateNumArr(5, 9, 1, 0);

for (var i = 0; i < 3; i++) {
    const elm = document.createElement("li");
    const numSpan = document.createElement("span");
    numSpan.setAttribute("class", "num")
    const num1 = selectNum(oneDigitArr)
    numSpan.textContent = num1;

    const divElm = document.createElement("div");
    divElm.setAttribute("class", "fraction");
    const numeratorSpan = document.createElement("span");
    numeratorSpan.setAttribute("class", "fup");
    const num2 = selectNum(oneDigitArr)
    numeratorSpan.textContent = num2;
    divElm.appendChild(numeratorSpan);

    const barSpan = document.createElement("span");
    barSpan.setAttribute("class", "bar");
    divElm.appendChild(barSpan);

    const denominatorSpan = document.createElement("span");
    denominatorSpan.setAttribute("class", "fdn");
    const num3 = selectNum(denominatorArr);
    denominatorSpan.textContent = num3;
    divElm.appendChild(denominatorSpan);

    const equalSpan = document.createElement("span");
    equalSpan.textContent = "=";

    const answers = getFraction(num1, num2, num3);

    // create input elements with answer stored
    const divElm2 = document.createElement("div");
    divElm2.setAttribute("class", "fraction");
    const numeratorInput = document.createElement("input");
    numeratorInput.setAttribute("class", "fup");

    numeratorInput.setAttribute("data", answers[0]);
    numeratorInput.setAttribute("class", "my-answer");
    numeratorInput.setAttribute("id", `numerator-${i}`);

    divElm2.appendChild(numeratorInput);
    const barSpanInput = document.createElement("span");
    barSpanInput.setAttribute("class", "bar");
    divElm2.appendChild(barSpanInput);

    const denominatorInput = document.createElement("input");
    denominatorInput.setAttribute("class", "fdn");
    denominatorInput.setAttribute("data", answers[1]);
    denominatorInput.setAttribute("class", "my-answer")
    denominatorInput.setAttribute("id", `denominator-${i}`);
    divElm2.appendChild(denominatorInput);

    elm.appendChild(numSpan);
    elm.appendChild(divElm);
    elm.appendChild(equalSpan);
    fractionElm.appendChild(elm);
    elm.appendChild(divElm2);

    const responseEl = document.createElement("span");
    responseEl.setAttribute("class", "my-response");
    elm.appendChild(responseEl);
}

const mixedNumElm = document.getElementById("mixedNum");
const fixedTwoDigitArr = generateNumArr(12,98,2,0);
const fixedOneDigitArr = generateNumArr(3,13,2,0);

for (var i = 0; i < 3; i++) {
    const elm = document.createElement("li");

    const divElm = document.createElement("div");
    divElm.setAttribute("class", "fraction");
    const numeratorSpan = document.createElement("span");
    numeratorSpan.setAttribute("class", "fup");
    const num1 = selectNum(fixedTwoDigitArr)
    numeratorSpan.textContent = num1;
    divElm.appendChild(numeratorSpan);

    const barSpan = document.createElement("span");
    barSpan.setAttribute("class", "bar");
    divElm.appendChild(barSpan);

    const denominatorSpan = document.createElement("span");
    denominatorSpan.setAttribute("class", "fdn");
    const num2 = selectNum(fixedOneDigitArr)
    denominatorSpan.textContent = num2;
    divElm.appendChild(denominatorSpan);

    const equalSpan = document.createElement("span");
    equalSpan.textContent = "=";

    const answers = getMixedNum(num1, num2);

    // create input elements with answer stored
    const divElm2 = document.createElement("div");
    divElm2.setAttribute("class", "fraction");
    const numeratorInput = document.createElement("input");
    numeratorInput.setAttribute("data", answers[1]);
    numeratorInput.setAttribute("class", "fup my-answer");
    numeratorInput.setAttribute("id", `numerator2-${i}`);

    // numeratorInput.setAttribute("class", "fup");
    divElm2.appendChild(numeratorInput);
    const barSpanInput = document.createElement("span");
    barSpanInput.setAttribute("class", "bar");
    divElm2.appendChild(barSpanInput);

    const denominatorInput = document.createElement("input");
    denominatorInput.setAttribute("class", "fdn");
    denominatorInput.setAttribute("data", answers[2]);
    denominatorInput.setAttribute("class", "my-answer")
    denominatorInput.setAttribute("id", `denominator2-${i}`);
    divElm2.appendChild(denominatorInput);

    const numInput = document.createElement("input");
    numInput.setAttribute("class", "num-entry my-answer");
    numInput.setAttribute("data", answers[0]);
    numInput.setAttribute("id", `num-${i}`);

    elm.appendChild(divElm);
    elm.appendChild(equalSpan);
    mixedNumElm.appendChild(elm);
    elm.appendChild(numInput);
    elm.appendChild(divElm2);

    const responseEl = document.createElement("span");
    responseEl.setAttribute("class", "my-response");
    elm.appendChild(responseEl);
}

function getFraction(num1, num2, num3) {
    let numerator = Number(num1 * num3) + Number(num2);
    let denominator = num3;
    return [numerator, denominator];
}

// console.log(getFraction(2,1,5));

function getMixedNum(num1, num2) {
    let denominator = num2;
    let result = num1 / num2;
    result = Math.trunc(result)
    let remainder = num1 % num2;
    return [result, remainder, denominator]
}

// console.log(getMixedNum(95,2));

// function to grade the student answer
checkBtn.addEventListener("click", function () {
    const allInputElms = document.querySelectorAll(".my-answer");
    const allResponseElems = document.querySelectorAll(".my-response");
    for (let index = 0; index < allInputElms.length; index++) {
        const studentAnswer = Number(allInputElms[index].value).toFixed(4);
        let teacherAnswer = Number(allInputElms[index].getAttribute("data"));
        teacherAnswer = teacherAnswer.toFixed(4);
        console.log(`teacherAnswer = ${teacherAnswer}`)
        if (studentAnswer == teacherAnswer) {
            allResponseElems[index].textContent = "Nice Job!";
        } else {
            allResponseElems[index].textContent = "Try again!";
        };
    };
});