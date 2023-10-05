const contentEl = document.getElementById("content");
const button = document.getElementById("check-btn");

//num1 is the value of the number, dec is the how many decimals to show
const decimalGenerator = function (num, dec) {
    const numValue = (Math.random() * num) + num;
    const result = numValue.toFixed(dec);
    return result;
}

const decArray = [1, 2, 3, 4];
const numArray = [5, 5, 5, 5, 4, 5, 5, 5];
//choses a random number from array
const randomNumber = function (array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

for (let index = 0; index < 10; index++) {

    const randomValue1 = randomNumber(numArray);
    const randomValue2 = randomNumber(numArray);
    const randomDec1 = randomNumber(decArray);
    const randomDec2 = randomNumber(decArray);
    const num1 = decimalGenerator(randomValue1, randomDec1);
    const num2 = decimalGenerator(randomValue2, randomDec2);
    let dataAttribute = "";
    if (num1 < num2) {
        dataAttribute = "<";
    };
    if (num1 > num2) {
        dataAttribute = ">";
    }
    if (num1 == num2) {
        dataAttribute = "=";
    };
    const listEl = document.createElement("li");
    listEl.setAttribute("id", `inst${index}`);
    const spanEl1 = document.createElement("span");
    spanEl1.textContent = num1;
    const inputEl = document.createElement("input");
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", dataAttribute);
    const spanEl2 = document.createElement("span");
    spanEl2.textContent = num2;
    contentEl.appendChild(listEl);
    listEl.appendChild(spanEl1);
    listEl.appendChild(inputEl);
    listEl.appendChild(spanEl2);
    let spanEl3 = document.createElement("span");
    spanEl3.setAttribute("class", "response-elm")
    spanEl3.textContent = "";
    listEl.appendChild(spanEl3);
}

button.addEventListener("click", function () {
    const allResponseElms = document.getElementsByClassName("response-elm");
    const allInputElms = document.querySelectorAll("input");
    for (let index = 0; index < allInputElms.length; index++) {
        const studentAnswer = allInputElms[index].value;
        const teacherAnswer = allInputElms[index].getAttribute("data");
        if (studentAnswer == teacherAnswer) {
            allResponseElms[index].textContent = "Correct!"
        } else {
            allResponseElms[index].textContent = "Try Again!"
        }
    }
});