const contentEl = document.getElementById("content");

// const instances = [
//     {

//     }
// ]

// divisible by 12
const instanceValues = [0.48, 0.60, 0.72, 0.84, 0.96, 0.36, 0.24];
const nums = [12, 6, 48];

const getRandomValue = function (array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

for (let index = 0; index < instanceValues.length; index++) {
    const listElement = document.createElement("li");
    const instanceValue1 = getRandomValue(instanceValues);
    const instanceValue2 = getRandomValue(nums);
    listElement.textContent = `It cost $${instanceValue1} for a ${instanceValue2} ounce can of beans. How much does it cost per ounce?`;
    contentEl.appendChild(listElement);
}