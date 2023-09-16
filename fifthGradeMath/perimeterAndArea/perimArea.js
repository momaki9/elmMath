
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

const evenNum1 = generateNumArr(102,204,2,0);
const evenNum2 = generateNumArr(44,64,2,0);
// 3 and 5
const threeNums = [3,5,15];
const numsDivBy15 = generateNumArr(60,180,15,0);
// 4 and 8
const numsDivBy16 = generateNumArr(64,144,16,0);
const fourOrEight = [4,8];
const twoDigitNums = generateNumArr(16,75,1,0);

const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
};

const value1 = selectNum(evenNum1);
const value2 = selectNum(evenNum2);
const value3 = selectNum(numsDivBy16);
const value4 = selectNum(fourOrEight);
const value5 = selectNum(evenNum2);
const value6 = selectNum(evenNum2);
const value7 = selectNum(twoDigitNums);
const value8 = selectNum(twoDigitNums);

const instances = [
    {
        question: `Aaron’s backyard has a perimeter of ${value1} feet. If the width of the backyard is ${value2} feet. What is the length of the backyard?`,
        answer: (value1/2)-value2
    },
    {
        question: `Ibrahim’s bedroom has an area of ${value3} cubic feet. If the width of the bedroom is ${value4} feet. What is the width of the bedroom?`,
        answer: value3/value4
    },
    {
        question: `If your bedroom has a width of ${value5} feet and a length of ${value6} feet. What is the perimeter of your room? What is the area?`,
        answer: 2*(value5+value6)
    },
    {
        question: `Mariam's pool has a width of ${value7} feet and a length of ${value8} feet. What is the area of the pool?`,
        answer: value7*value8
    }
];

const contentEl = document.getElementById("content");

for (let index = 0; index < instances.length; index++) {
    const listEl = document.createElement("li");
    listEl.textContent = instances[index].question;
    contentEl.appendChild(listEl);
    listEl.setAttribute("class", "perimeter-and-area");
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", instances[index].answer);
    inputEl.setAttribute("id", `input-${index}`);
    listEl.appendChild(inputEl);
    const spanEl = document.createElement("span");
    spanEl.setAttribute("id", `span-${index}`);
    spanEl.setAttribute("class", "span-PA");
    listEl.appendChild(spanEl);
}

document.getElementById("check-ans").addEventListener("click", function(){
    const inputElms = document.querySelectorAll("input");
    const responseElms = document.querySelectorAll("span");
    for (let i = 0; i < inputElms.length; i++) {
        const studentAns = inputElms[i].value;
        const teacherAns = inputElms[i].getAttribute("data");
        if (studentAns == teacherAns) {
            responseElms[i].textContent = "Excellent!";
        } else {
            responseElms[i].textContent = "Not quite. Try Again!";
        }
        
    }
});


