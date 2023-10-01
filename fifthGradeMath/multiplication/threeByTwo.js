
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

const threeDigitNum = generateNumArr(101, 999, 1);
const twoDigitNum = generateNumArr(13, 99, 1);

const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
};

const contentEl = document.getElementById('content');
const checkBtn = document.getElementById('check-ans');

for (let index = 0; index < 10; index++) {
    const num1 = selectNum(twoDigitNum);
    const num2 = selectNum(threeDigitNum);
    const ans = num1 * num2;
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", ans)
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list-${index}`);
    listEl.textContent = `${num2} × ${num1} = `;
    contentEl.appendChild(listEl);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `response-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

checkBtn.addEventListener("click", () => {
    for (let index = 0; index < 10; index++) {
        const inputElm = document.getElementById(`input-${index}`);
        const responseElm = document.getElementById(`response-${index}`);
        const studentAnswer = inputElm.value;
        const TeacherAnswer = inputElm.getAttribute("data");
        if (studentAnswer == TeacherAnswer) {
            responseElm.textContent = "Correct";
        } else {
            responseElm.textContent = "Try Again!";
        }
    }
});
