
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

const decimalNumArray = generateNumArr(1,9,0.1,1);
const decimalNumArray2 = generateNumArr(15,45,0.1,1);

const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
};

const contentEl1 = document.getElementById('content-1');
const checkBtn1 = document.getElementById('check-ans-1');

for (let index = 0; index < 5; index++) {
    const num1 = selectNum(decimalNumArray);
    const num2 = selectNum(decimalNumArray);
    const ans = num1 * num2;
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input1-${index}`);
    inputEl.setAttribute("data", ans)
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list1-${index}`);
    listEl.textContent = `${num2} × ${num1} = `;
    contentEl1.appendChild(listEl);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `response1-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

checkBtn1.addEventListener("click", () => {
    for (let index = 0; index < 10; index++) {
        const inputElm = document.getElementById(`input-${index}`);
        const responseElm = document.getElementById(`response-${index}`);
        let studentAnswer = inputElm.value;
        studentAnswer = Number(studentAnswer).toFixed(2);
        let teacherAnswer = inputElm.getAttribute("data");
        teacherAnswer = Number(teacherAnswer).toFixed(2);
        if (studentAnswer == teacherAnswer) {
            responseElm.textContent = "Correct";
        } else {
            responseElm.textContent = "Try Again!";
        }
    }
});

const contentEl2 = document.getElementById('content-2');
const checkBtn2 = document.getElementById('check-ans-2');

for (let index = 0; index < 5; index++) {
    const num1 = selectNum(decimalNumArray);
    const num2 = selectNum(decimalNumArray2);
    const ans = num1 * num2;
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input2-${index}`);
    inputEl.setAttribute("data", ans)
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list2-${index}`);
    listEl.textContent = `${num2} × ${num1} = `;
    contentEl2.appendChild(listEl);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `response2-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

checkBtn2.addEventListener("click", () => {
    for (let index = 0; index < 10; index++) {
        const inputElm = document.getElementById(`input-${index}`);
        const responseElm = document.getElementById(`response-${index}`);
        let studentAnswer = inputElm.value;
        studentAnswer = Number(studentAnswer).toFixed(2);
        let teacherAnswer = inputElm.getAttribute("data");
        teacherAnswer = Number(teacherAnswer).toFixed(2);
        if (studentAnswer == teacherAnswer) {
            responseElm.textContent = "Correct";
        } else {
            responseElm.textContent = "Try Again!";
        }
    }
});