const contentElement = document.getElementById('fraction-content');
const checkBtn = document.getElementById('submit-ans');

checkBtn.addEventListener("click", () => {
    for (let index = 1; index <= 10; index++) {
        const answerElem = document.getElementById(`hidden-${index}`);
        const responseElm = document.getElementById(`response-${index}`);
        const correctAns = answerElem.getAttribute("data");
        const studentNumerator = document.getElementById(`numerator-ans${index}`);
        const studentDenominator = document.getElementById(`denominator-ans${index}`);
        const studentAnswer = studentNumerator.value / studentDenominator.value;
        if (correctAns == studentAnswer) {
            console.log("correct")
            responseElm.textContent = "Correct";
        } else {
            console.log("incorrect")
            responseElm.textContent = "Try Again!";
        }
    }
})

const firstNumerator = [6, 7, 8, 9];
const secondNumerator = [1, 2, 3, 4, 5, 6, 7];
const firstDenom = [2, 3, 4, 5];
const secondDenom = [6, 7, 8];
const operation = ["+", "−"];

const randomValuePicker = function (arr) {
    const value = arr[Math.floor(Math.random() * arr.length)];
    return value;
};

for (let index = 1; index <= 10; index++) {
    const numeratorValue1 = randomValuePicker(firstNumerator);
    const numeratorValue2 = randomValuePicker(secondNumerator);
    const denominatorValue1 = randomValuePicker(firstDenom);
    const denominatorValue2 = randomValuePicker(secondDenom);
    const chosenOperation = randomValuePicker(operation);

    const answer1 = (numeratorValue1 / denominatorValue1) + (numeratorValue2 / denominatorValue2);
    const answer2 = (numeratorValue1 / denominatorValue1) - (numeratorValue2 / denominatorValue2);
    console.log(`Instance-${index} answer (addition) = ${answer1}; subtraction = ${answer2}`);

    const listItem = document.createElement('li');

    const firstDiv = document.createElement('div');
    firstDiv.setAttribute("class", "fraction");
    listItem.appendChild(firstDiv);

    const operationSpan = document.createElement('span');
    operationSpan.textContent = chosenOperation;
    listItem.appendChild(operationSpan);

    const secondDiv = document.createElement('div');
    secondDiv.setAttribute("class", "fraction");
    listItem.appendChild(secondDiv);

    const firstDivSpan1 = document.createElement('span');
    firstDivSpan1.setAttribute("class", "fup");
    firstDivSpan1.textContent = numeratorValue1;
    firstDiv.appendChild(firstDivSpan1);

    const firstDivSpan2 = document.createElement('span');
    firstDivSpan2.setAttribute("class", "bar");
    firstDivSpan2.textContent = "/";
    firstDiv.appendChild(firstDivSpan2);

    const firstDivSpan3 = document.createElement('span');
    firstDivSpan3.setAttribute("class", "fdn");
    firstDivSpan3.textContent = denominatorValue1;
    firstDiv.appendChild(firstDivSpan3);

    const secondDivSpan1 = document.createElement('span');
    secondDivSpan1.setAttribute("class", "fup");
    secondDivSpan1.textContent = numeratorValue2;
    secondDiv.appendChild(secondDivSpan1);

    const secondDivSpan2 = document.createElement('span');
    secondDivSpan2.setAttribute("class", "bar");
    secondDivSpan2.textContent = "/";
    secondDiv.appendChild(secondDivSpan2);

    const secondDivSpan3 = document.createElement('span');
    secondDivSpan3.setAttribute("class", "fdn");
    secondDivSpan3.textContent = denominatorValue2;
    secondDiv.appendChild(secondDivSpan3);

    const finalSpan = document.createElement("span");
    finalSpan.setAttribute("id", `hidden-${index}`);
    finalSpan.textContent = "=";
    listItem.appendChild(finalSpan);

    if (chosenOperation === "+") {
        finalSpan.setAttribute("data", answer1)
    } else {
        finalSpan.setAttribute("data", answer2)
    };

    const thirdDiv = document.createElement('div');
    thirdDiv.setAttribute("class", "fraction");
    listItem.appendChild(thirdDiv);

    const thirdDivSpan1 = document.createElement('input');
    thirdDivSpan1.setAttribute("class", "fup");
    thirdDivSpan1.setAttribute("id", `numerator-ans${index}`);
    thirdDiv.appendChild(thirdDivSpan1);

    const thirdDivSpan2 = document.createElement('span');
    thirdDivSpan2.setAttribute("class", "bar");
    thirdDivSpan2.textContent = "/";
    thirdDiv.appendChild(thirdDivSpan2);

    const thirdDivSpan3 = document.createElement('input');
    thirdDivSpan3.setAttribute("class", "fdn");
    thirdDivSpan3.setAttribute("id", `denominator-ans${index}`);
    thirdDiv.appendChild(thirdDivSpan3);

    const response = document.createElement('span');
    response.setAttribute("id", `response-${index}`);
    response.textContent = "";
    listItem.appendChild(response);

    contentElement.appendChild(listItem);
};