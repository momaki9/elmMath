const contentEl = document.getElementById('content');
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

const powerOfTenArray = [
    {
        display: "10",
        value: 10
    },
    {
        display: "10<sup>1</sup>",
        value: 10
    },
    {
        display: "10<sup>2</sup>",
        value: 100
    },
    {
        display: "10<sup>3</sup>",
        value: 1000
    },
    {
        display: "10<sup>4</sup>",
        value: 10000
    },
    {
        display: "10<sup>5</sup>",
        value: 100000
    },
    {
        display: "10<sup>6</sup>",
        value: 1000000
    }
]
const numArray = generateNumArr(3, 90, 1, 0);

const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
};

for (let index = 0; index < 10; index++) {
    const num1 = selectNum(powerOfTenArray);
    const num2 = selectNum(numArray);
    const num1Display = num1.display;
    const ans = num1.value * num2;
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", ans)
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list-${index}`);
    listEl.innerHTML = `${num2} × ${num1Display} = `;
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