const contentEl = document.getElementById('content');
const checkBtn = document.getElementById("check-ans");

const randomIndex = function (array) {
    const chosenIndex = Math.floor(Math.random() * array.length);
    return chosenIndex;
};


const instances = [
    {
        numerator: [2440, 5368, 6504, 5360, 1216, 1472],
        denom: 8
    },
    {
        numerator: [1572, 1824, 2916, 3972, 3324, 5232],
        denom: 6
    },
    {
        numerator: [1519, 4221, 4984, 6174, 6258, 3913],
        denom: 7
    },
    {
        numerator: [2432, 5376, 2688, 2816, 5728, 5112],
        denom: 8
    },
    {
        numerator: [4941, 5751, 1458, 2187, 3078, 3888],
        denom: 9
    },
    {
        numerator: [1540, 4241, 5005, 6195, 6279, 3934],
        denom: 7
    }
];

for (let index = 0; index <= 5; index++) {
    const listEl = document.createElement('li');
    const chooseIndex = randomIndex(instances[index].numerator);
    listEl.textContent = `${instances[index].numerator[chooseIndex]} ÷ ${instances[index].denom} =`;
    const answer = instances[index].numerator[chooseIndex] / instances[index].denom;
    listEl.setAttribute("data", answer);
    contentEl.appendChild(listEl);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `input-${index}`);
    inputEl.setAttribute("data", answer);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `res-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

checkBtn.addEventListener("click", () => {
    const allInputElems = document.querySelectorAll("input");
    const allSpanElems = document.querySelectorAll("span");
    for (let index = 0; index < allInputElems.length; index++) {
        const data = allInputElems[index].getAttribute("data");
        const studentAnswer = allInputElems[index].value;
        if (studentAnswer == data) {
            allSpanElems[index].textContent = "Correct";
        } else {
            allSpanElems[index].textContent = "Try Again!";
        }
    }
});