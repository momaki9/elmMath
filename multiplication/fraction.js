const contentEl = document.getElementById("fraction-mult");

const firstNumerator = [6, 7, 8, 9];
const secondNumerator = [1, 2, 3, 4, 5, 6, 7];
const firstDenom = [2, 3, 4, 5];
const secondDenom = [6, 7, 8];
const operation = ["×", "÷"];

const randomValuePicker = function (arr) {
    const value = arr[Math.floor(Math.random() * arr.length)];
    return value;
};

for (let index = 0; index < 5; index++) {
    const listElement = document.createElement("li");
    const numerator1 = randomValuePicker(firstNumerator)
    const numerator2 = randomValuePicker(secondNumerator)
    const denominator1 = randomValuePicker(firstDenom)
    const denominator2 = randomValuePicker(secondDenom)
    const chosenOperation = randomValuePicker(operation)
    listElement.textContent = `${numerator1} / ${denominator1} ${chosenOperation} ${numerator2} / ${denominator2} =`
    contentEl.appendChild(listElement)
}

