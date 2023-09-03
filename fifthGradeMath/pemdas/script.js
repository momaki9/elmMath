const contentEl = document.getElementById('content');

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


const evenPool = [8,10,12,14,16,18];
const evenNum = getElemFromArray(evenPool);

const instances = [
    {
        instance: `${num1} × (${num3} − ${num2}) + ${num1} ÷ ${num11} = `,
        answer: num1 * (num3 - num2) + num1 / num11
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
    }
];

for (let index = 0; index <= 4; index++) {
    const listEl = document.createElement("li");
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", instances[index].answer) 
    listEl.textContent = instances[index].instance;
    contentEl.appendChild(listEl);
    listEl.appendChild(inputEl);
};

