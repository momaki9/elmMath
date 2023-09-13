const contentEl = document.getElementById('content');
const checkBtn = document.getElementById('check-btn');

const getElemFromArray = function (arr) {
    const value = arr[Math.floor(Math.random() * arr.length)];
    return value;
};

const pool1 = [1, 2, 3, 4, 5, 6];
const num1 = getElemFromArray(pool1);
const num11 = getElemFromArray(pool1);
const num111 = 1;

const pool2 = [7, 8, 9, 10, 11, 12];
const num2 = getElemFromArray(pool2);
const num22 = getElemFromArray(pool2);
const num2222 = getElemFromArray(pool2);
const num222 = 2;


const pool3 = [13, 14, 15, 16, 17, 18, 19, 20];
const num3 = getElemFromArray(pool3);
const num33 = getElemFromArray(pool3);
const num333 = 3;

const pool4 = [4,8,16,20,24,28,32];
const num4 = getElemFromArray(pool4);
const num44 = getElemFromArray(pool4);
const num444 = 4
const num4444 = getElemFromArray(pool4);


const evenPool = [8,10,12,14,16,18];
const evenNum = getElemFromArray(evenPool);

const divisbleByThreePool = [6,9,12,15,18,21,24,27,36];
const multipleOf3 = getElemFromArray(divisbleByThreePool);


const instances = [
    {
        instance: `${num1} × (${num3} − ${num2}) + ${multipleOf3} ÷ ${num333} = `,
        answer: num1 * (num3 - num2) + multipleOf3 / num333
    },
    {
        instance: `${num3} + ${num2} − ${num111} × ${num1} = `,
        answer: num3 + num2 - num111 * num1
    },
    {
        instance: `${num1} + ${evenNum} ÷ ${num222} × ${num2} = `,
        answer: num1 + evenNum / num222 * num2
    },
    {
        instance: `${num33} + (${num22} − ${num11}) × ${num33} = `,
        answer: num33 + (num22 - num11) * num33
    },
    {
        instance: `${evenNum} ÷ ${num222} + ${num2222} × ${num2} = `,
        answer: evenNum / num222 + num2222 * num2
    },
    {
        instance: `${num4444} × (${num33} × ${num222} + ${num2} − ${num1})`,
        answer: num4444*(num33*num222+num2-num1)
    },
    {
        instance: `(${num4} ÷ ${num444}) × ${num22} − ${num111} + ${num44} × (${num44} − ${num11})`,
        answer: (num4/num444)*num22-num111+num44*(num44-num11)
    }
];

for (let index = 0; index <= 6; index++) {
    const listEl = document.createElement("li");
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", instances[index].answer) 
    listEl.textContent = instances[index].instance;
    contentEl.appendChild(listEl);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `response-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

checkBtn.addEventListener("click", () => {
    for (let index = 0; index <= 6; index++) {
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
