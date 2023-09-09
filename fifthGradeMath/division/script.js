const typeOneEl = document.getElementById('type-1');
const typeTwoEl = document.getElementById('type-2');
const typeThreeEl = document.getElementById('type-3');
const typeFourEl = document.getElementById('type-4');
const checkBtn = document.getElementById("check-ans");

const instances = [
    {
        numerator: [240, 250, 260, 270, 280, 290],
        denom: "10<sup>2</sup>",
        answer: [2.4, 2.5, 2.6, 2.7, 2.8, 2.9]
    },
    {
        numerator: [4500, 4600, 4700, 4800, 4900],
        denom: "10<sup>3</sup>",
        answer: [4.5, 4.6, 4.7, 4.8, 4.9]
    },
    {
        numerator: [310, 320, 330, 340, 350, 360],
        denom: "10",
        answer: [31, 32, 33, 34, 35, 36]
    },
    {
        numerator: [0.61, 0.62, 0.63, 0.64, 0.65, 0.66],
        denom: "10<sup>2</sup>",
        answer: [0.0061, 0.0062, 0.0063, 0.0064, 0.0065, 0.0066]
    },
    {
        numerator: [5.10, 5.20, 5.30, 5.40, 5.50],
        denom: "10<sup>3</sup>",
        answer: [0.0051, 0.0052, 0.0053, 0.0054, 0.0055]
    }
];

const randomIndex = function (array) {
    const chosenIndex = Math.floor(Math.random() * array.length);
    return chosenIndex;
};

for (let index = 0; index <= 4; index++) {
    const listEl = document.createElement('li');
    const chooseIndex = randomIndex(instances[index].numerator);
    listEl.innerHTML = `${instances[index].numerator[chooseIndex]} ÷ ${instances[index].denom} =`;
    const answer = instances[index].answer[chooseIndex];
    listEl.setAttribute("data", answer);
    typeOneEl.appendChild(listEl);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `type1-${index}`);
    inputEl.setAttribute("data", answer);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `res-type1-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

const type2Instances = [
    {
        numerator: [288, 328, 360, 408, 152, 184],
        denom: 8
    },
    {
        numerator: [150, 204, 486, 462, 354, 372],
        denom: 6
    },
    {
        numerator: [217, 203, 112, 182, 294, 259],
        denom: 7
    },
    {
        numerator: [304, 320, 336, 352, 376, 416],
        denom: 8
    },
    {
        numerator: [549, 639, 162, 243, 342, 432],
        denom: 9
    },
    {
        numerator: [231, 252, 266, 441, 497, 581],
        denom: 7
    }
];

for (let index = 0; index <= 5; index++) {
    const listEl = document.createElement('li');
    const chooseIndex = randomIndex(type2Instances[index].numerator);
    listEl.textContent = `${type2Instances[index].numerator[chooseIndex]} ÷ ${type2Instances[index].denom} =`;
    const answer = type2Instances[index].numerator[chooseIndex] / type2Instances[index].denom;
    listEl.setAttribute("data", answer);
    typeTwoEl.appendChild(listEl);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `type2-${index}`);
    inputEl.setAttribute("data", answer);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `res-type2-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

const type3Instances = [
    {
        numerator: [324, 486, 567, 351],
        denom: 27
    },
    {
        numerator: [972, 891],
        denom: 81
    },
    {
        numerator: [361, 475, 589, 551],
        denom: 19
    },
    {
        numerator: [756, 936, 648],
        denom: 36
    },
    {
        numerator: [576, 912, 672],
        denom: 48
    }
];

for (let index = 0; index <= 4; index++) {
    const listEl = document.createElement('li');
    const chooseIndex = randomIndex(type3Instances[index].numerator);
    listEl.textContent = `${type3Instances[index].numerator[chooseIndex]} ÷ ${type3Instances[index].denom} =`;
    const answer = type3Instances[index].numerator[chooseIndex] / type3Instances[index].denom;
    listEl.setAttribute("data", answer);
    typeThreeEl.appendChild(listEl);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `type3-${index}`);
    inputEl.setAttribute("data", answer);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `res-type3-${index}`);
    response.textContent = "";
    listEl.appendChild(response);
};

const type4Instances = [
    {
        numerator: [972, 864, 756],
        denom: 108
    },
    {
        numerator: [672, 896, 560],
        denom: 112
    },
    {
        numerator: [632, 948],
        denom: 316
    }
];

for (let index = 0; index <= 2; index++) {
    const listEl = document.createElement('li');
    const chooseIndex = randomIndex(type4Instances[index].numerator);
    listEl.textContent = `${type4Instances[index].numerator[chooseIndex]} ÷ ${type4Instances[index].denom} =`;
    const answer = type4Instances[index].numerator[chooseIndex] / type4Instances[index].denom;
    listEl.setAttribute("data", answer);
    typeFourEl.appendChild(listEl);
    const inputEl = document.createElement('input');
    inputEl.setAttribute("id", `type4-${index}`);
    inputEl.setAttribute("data", answer);
    listEl.appendChild(inputEl);
    const response = document.createElement('span');
    response.setAttribute("id", `res-type4-${index}`);
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