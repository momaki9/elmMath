const contentElement = document.getElementById("conteny-express");

const instanceObj = [
    {
        exp: "double 9, multiply 5 and 3, and then subtract the second number from the first number",
        ans: "(2 × 9) − (3 × 5)"
    },
    {
        exp: "triple 6, multiply 2 and 4, and then add them",
        ans: "(3 × 6) + (4 × 2)"
    },
    {
        exp: "triple 4 and then add 8 times 6",
        ans: "(3 × 4) + (8 × 6)"
    },
    {
        exp: "triple 5 and then subtract 4 times 2",
        ans: "(3 × 5) − (4 × 2)"
    },
    {
        exp: "triple 6 and then subtract 3 times 4",
        ans: "(3 × 6) − (3 × 4)"
    },
    {
        exp: "quadruple 8 and then add 9 times 7",
        ans: "(4 × 8) + (9 × 7)"
    },
    {
        exp: "triple 7 and then subtract 2 times 4",
        ans: "(3 × 7) − (2 × 4)"
    },
    {
        exp: "multiply 3 and 6, and then add 8 times 2",
        ans: "(3 × 6) + (8 × 2)"
    },
    {
        exp: "quadruple 7, multiply 2 and 9, and then subtract the second number from the first number",
        ans: "(4 × 7) − (2 × 9)"
    },
    {
        exp: "triple 4, multiply 11 and 7, and then add the second number from the first number",
        ans: "(3 × 4) + (11 × 7)"
    },
    {
        exp: "subtract 10 divided into fourths from 18 divided into thirds",
        ans: "(18 ÷ 3) − (10 ÷ 4)"
    }
];


const returnOneElement = function(array){
    const oneIndex = Math.floor(Math.random()*array.length);
    return array[oneIndex];
};

for (let index = 0; index < 4; index++) {
    const listElement = document.createElement("li");
    const instance = returnOneElement(instanceObj);
    listElement.textContent = instance.exp;
    contentElement.appendChild(listElement);
    const button = document.createElement("button");
    button.setAttribute("id", `inst${index}`)
    button.textContent = "Show Answer"
    contentElement.appendChild(button);
    const ansElem = document.createElement("h3");
    ansElem.setAttribute("id", `ans-${index}`);
    ansElem.textContent = instance.ans;
    ansElem.hidden = true;
    contentElement.appendChild(ansElem);

    button.addEventListener("click", function () {
        if (ansElem.hidden) {
            ansElem.hidden = false;
            button.textContent = "Hide Answer";
        } else {
            ansElem.hidden = true;
            button.textContent = "Show Answer";
        }
    });
};