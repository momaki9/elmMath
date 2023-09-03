const contentElement = document.getElementById('fraction-content');

const numerator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const denominator = [2, 3, 4, 5, 6, 7, 8, 9];
const operation = ["+", "−"];

const randomValuePicker = function (arr) {
    const value = arr[Math.floor(Math.random() * arr.length)];
    return value;
};

for (let index = 1; index <= 10; index++) {
    const numeratorValue1 = randomValuePicker(numerator);
    const numeratorValue2 = randomValuePicker(numerator);
    const denominatorValue1 = randomValuePicker(denominator);
    const denominatorValue2 = randomValuePicker(denominator);
    const chosenOperation = randomValuePicker(operation);

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
    finalSpan.textContent = "=";
    listItem.appendChild(finalSpan);

    contentElement.appendChild(listItem);

}