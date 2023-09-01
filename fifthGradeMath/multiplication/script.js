const contentEl = document.getElementById('content');
const numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener("click", ()=>{
    for (let index = 0; index < 50; index++) {
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
})

const generateProblem = function(arr) {
    const randomNum1 = Math.floor(Math.random()*arr.length);
    const randomNum2 = Math.floor(Math.random()*arr.length);
    const product = arr[randomNum1]*arr[randomNum2];
    return [arr[randomNum1], arr[randomNum2], product];
};

for (let index = 0; index < 50; index++) {
    const instanceValues = generateProblem(numArray);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", instanceValues[2])   
    const listEl = document.createElement('li');
    listEl.setAttribute("id", `list-${index}`);  
    listEl.textContent = `${instanceValues[0]} × ${instanceValues[1]} = `;
    contentEl.appendChild(listEl);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `response-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};