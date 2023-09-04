const contentElm = document.getElementById('content');
const checkBtn = document.getElementById('check-ans');

const generateNums = function(num1,num2) {
    const firstNum = Math.random()*num1;
    const secondNum = Math.random()*num2;
    return [firstNum.toFixed(3), secondNum.toFixed(3)];
};


for (let i = 0; i < 5; i++) {
    const listEl = document.createElement("li");
    const instanceValues = generateNums(100,300);
    const firstValue = instanceValues[0];
    const secondValue = instanceValues[1];
    let answer = parseFloat(firstValue) + parseFloat(secondValue);
    answer = answer.toFixed(3);
    listEl.textContent = `${firstValue} + ${secondValue} =`;
    contentElm.appendChild(listEl);
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("id", `add-${i}`);
    listEl.appendChild(inputEl);
    const responseEl = document.createElement("span");
    listEl.appendChild(responseEl);
};

for (let i = 0; i < 5; i++) {
    const listEl = document.createElement("li");
    const instanceValues = generateNums(400,20);
    let firstValue = instanceValues[0];
    let secondValue = instanceValues[1];
    if (secondValue >= firstValue) {
        firstValue = parseFloat(secondValue) + parseFloat(firstValue);
        firstValue = firstValue.toFixed(3)
    };
    let answer = parseFloat(firstValue) - parseFloat(secondValue);
    answer = answer.toFixed(3);
    listEl.textContent = `${firstValue} − ${secondValue} =`;
    contentElm.appendChild(listEl);
    const inputEl = document.createElement("input");
    inputEl.setAttribute("data", answer);
    inputEl.setAttribute("id", `sub-${i}`);
    listEl.appendChild(inputEl);
    const responseEl = document.createElement("span");
    listEl.appendChild(responseEl); 
};

checkBtn.addEventListener("click", function(){
    const allInputElms = document.querySelectorAll("input");
    const allResponseElems = document.querySelectorAll("span");
    for (let index = 0; index < allInputElms.length; index++) {
        const studentAnswer = allInputElms[index].value;
        const teacherAnswer = allInputElms[index].getAttribute("data");
        if (studentAnswer == teacherAnswer) {
            allResponseElems[index].textContent = "Nice Job!"
        } else {
            allResponseElems[index].textContent = "Try again!"
        };
    };
});