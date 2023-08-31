const contentEl = document.getElementById('content');
const numArray = [1,2,3,4,5,6,7,8,9,10,11,12];

const generateProblem = function(arr) {
    const randomNum1 = Math.floor(Math.random()*arr.length);
    const randomNum2 = Math.floor(Math.random()*arr.length);
    const product = arr[randomNum1]*arr[randomNum2];
    return [arr[randomNum1], arr[randomNum2], product];
};

for (let index = 0; index < 15; index++) {
    const instanceValues = generateProblem(numArray);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);   
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list-${index}`);  
    listEl.textContent = `${instanceValues[0]} × ${instanceValues[1]} = `;
    contentEl.appendChild(listEl);
    listEl.appendChild(inputEl);
};