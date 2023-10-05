
const instances = [
    {
        decimal: [30.6, 22.5, 11.7, 36.9],
        num: 9
    },
    {
        decimal: [29.6, 36.8, 42.4, 48.8],
        num: 8
    },
    {
        decimal: [43.4, 37.8, 32.2, 27.3],
        num: 7
    },
    {
        decimal: [29.4, 34.8, 40.2, 44.4],
        num: 6
    },
    {
        decimal: [39.5, 42.5, 20.5, 28.5],
        num: 5
    }
]


const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    return randomValue;
};

const contentEl = document.getElementById('content');
const checkBtn = document.getElementById('check-ans');

for (let index = 0; index < 10; index++) {
    const instance = selectNum(instances)
    const num1 = selectNum(instance.decimal);
    const num2 = instance.num;
    const ans = num1 / num2;
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", ans)
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list-${index}`);
    listEl.textContent = `${num1} ÷ ${num2} = `;
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
