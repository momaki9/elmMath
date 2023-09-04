const contentEl = document.getElementById('content');
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const checkBtn = document.getElementById('check-btn');

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

const generateProblem = function (arr) {
    const randomNum1 = Math.floor(Math.random() * arr.length);
    const randomNum2 = Math.floor(Math.random() * arr.length);
    const product = arr[randomNum1] * arr[randomNum2];
    return [arr[randomNum1], arr[randomNum2], product];
};

for (let index = 0; index < 10; index++) {
    const instanceValues = generateProblem(numArray);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", instanceValues[2])
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list-${index}`);
    listEl.textContent = `${instanceValues[0]} × ${instanceValues[1]} = `;
    contentEl.appendChild(listEl);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `response-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

const twoDigits = [11,12,13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,53,54, 55,56, 57,58,59,60, 61, 77, 63, 70, 72, 76, 81, 84, 91, 92, 93, 94, 95, 96];

// const oneDigit = [3, 4, 5, 6, 7, 8, 9];

const contentElem2 = document.getElementById('content2');
const checkBtn2 = document.getElementById('check-btn2');

const generateHarderProblem = function (arr1, arr2) {
    const randomNum1 = Math.floor(Math.random() * arr1.length);
    const randomNum2 = Math.floor(Math.random() * arr2.length);
    const product = arr1[randomNum1] * arr2[randomNum2];
    return [arr1[randomNum1], arr2[randomNum2], product];
};

for (let index = 0; index < 10; index++) {
    const instanceValues = generateHarderProblem(twoDigits,twoDigits);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input2-${index}`);
    inputEl.setAttribute("data", instanceValues[2])
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list2-${index}`);
    listEl.textContent = `${instanceValues[0]} × ${instanceValues[1]} = `;
    contentElem2.appendChild(listEl);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `response2-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

checkBtn2.addEventListener("click", () => {
    for (let index = 0; index < 10; index++) {
        const inputElm = document.getElementById(`input2-${index}`);
        const responseElm = document.getElementById(`response2-${index}`);
        const studentAnswer = inputElm.value;
        const TeacherAnswer = inputElm.getAttribute("data");
        if (studentAnswer == TeacherAnswer) {
            responseElm.textContent = "Correct";
        } else {
            responseElm.textContent = "Try Again!";
        }
    }
});
