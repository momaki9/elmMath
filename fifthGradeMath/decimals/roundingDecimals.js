const contentEl = document.getElementById("content-RD");
const checkBtn = document.getElementById("check-ans");
const randomNums = [2, 3, 4, 5, 6, 7, 9, 10];
const unroundedHelper = [3, 4, 5];
const roundHelper = [1, 2];

const generateADecimal = function (num) {
    const decimal = (Math.random() * num) + num;
    return decimal;
};

const provideDecimal = function (decimal, num1, num2) {
    const displayedValue = decimal.toFixed(num1);
    const roundedValue = decimal.toFixed(num2);
    return [displayedValue, roundedValue];
};

const chooseRandomNum = function (arr) {
    const indexValue = Math.floor(Math.random() * arr.length);
    return arr[indexValue];
};

for (let index = 0; index < 10; index++) {
    const listEl = document.createElement("li");
    const randomInstanceValue = chooseRandomNum(randomNums);
    const decimalValue = generateADecimal(randomInstanceValue);
    const shownDecimal = chooseRandomNum(unroundedHelper);
    const requestedDecimal = chooseRandomNum(roundHelper);

    let helperText = "";

    if (requestedDecimal == 1) {
        helperText = "tenths";
    } else {
        helperText = "hundredths";
    }
    const decimalArray = provideDecimal(decimalValue, shownDecimal, requestedDecimal);
    listEl.textContent = `Round ${decimalArray[0]} to the  ${helperText} place =`;
    const inputEl = document.createElement("input");
    inputEl.setAttribute("id", `inst${index}`);
    inputEl.setAttribute("data", decimalArray[1]);
    contentEl.appendChild(listEl);
    listEl.appendChild(inputEl);
    const responseElm = document.createElement("span");
    responseElm.textContent = "";
    listEl.appendChild(responseElm);
};

checkBtn.addEventListener("click", function () {
    const inputEls = document.querySelectorAll("input");
    const responseElms = document.querySelectorAll("span");
    for (let index = 0; index < inputEls.length; index++) {
        const studentAnswer = inputEls[index].value;
        const teacherAnswer = inputEls[index].getAttribute("data");
        if (studentAnswer == teacherAnswer) {
            responseElms[index].textContent = "Correct!"
        } else {
            responseElms[index].textContent = "Incorrect"
        }
    }
});