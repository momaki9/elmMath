// times (10,100,1000) more (x12) (divide into 2 pools (4 10's and 2 1000s + 4 100's and 2 1000s )); number them from 0 - 11 (0 - 5 & 6 - 11)
// is (1/10, 1/100,1/1000) of (x12) (divide into 2 pools (similar to above))
const instances = [
    {
        statement: "4.099 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>100</span></div> of ________ . Number = ",
        answer: 409.9
    },
    {
        statement: "81.407 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>100</span></div> of ________ . Number = ",
        answer: 8140.7
    },
    {
        statement: "51.602 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>100</span></div> of ________ . Number = ",
        answer: 5160.2
    },
    {
        statement: "1.103 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>100</span></div> of ________ . Number = ",
        answer: 110.3
    },
    {
        statement: "4.099 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>1000</span></div> of ________ . Number = ",
        answer: 4099
    },
    {
        statement: "81.407 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>1000</span></div> of ________ . Number = ",
        answer: 81407
    },
    {
        statement: "51.602 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>1000</span></div> of ________ . Number = ",
        answer: 51602
    },
    {
        statement: "1.103 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>1000</span></div> of ________ . Number = ",
        answer: 1103
    },
    {
        statement: "4.099 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>10</span></div> of ________ . Number = ",
        answer: 40.99
    },
    {
        statement: "81.407 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>10</span></div> of ________ . Number = ",
        answer: 814.07
    },
    {
        statement: "51.602 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>10</span></div> of ________ . Number = ",
        answer: 516.02
    },
    {
        statement: "1.103 is <div class='fraction'><span class='fup'>1</span><span class='bar'>/</span><span class='fdn'>10</span></div> of ________ . Number = ",
        answer: 11.03
    },
    {
        statement: "4.099 is 10 time more than ________ . Number = ",
        answer: 0.4099
    },
    {
        statement: "81.407 is 10 time more than ________ . Number = ",
        answer: 8.1407
    },
    {
        statement: "51.602 is 10 time more than ________ . Number = ",
        answer: 5.1602
    },
    {
        statement: "1.103 is 10 time more than ________ . Number = ",
        answer: 0.1103
    },
    {
        statement: "4.099 is 1000 time more than ________ . Number = ",
        answer: 0.004099
    },
    {
        statement: "81.407 is 1000 time more than ________ . Number = ",
        answer: 0.081407
    },
    {
        statement: "51.602 is 1000 time more than ________ . Number = ",
        answer: 0.051602
    },
    {
        statement: "1.103 is 1000 time more than ________ . Number = ",
        answer: 0.001103
    },
    {
        statement: "4.099 is 100 time more than ________ . Number = ",
        answer: 0.04099
    },
    {
        statement: "81.407 is 100 time more than ________ . Number = ",
        answer: 0.81407
    },
    {
        statement: "51.602 is 100 time more than ________ . Number = ",
        answer: 0.51602
    },
    {
        statement: "1.103 is 100 time more than ________ . Number = ",
        answer: 0.01103
    }
];

const instanceTypeOne = [0, 1, 2, 3, 4, 5];
const instanceTypeTwo = [12, 13, 14, 15, 16, 17];
const instanceTypeThree = [6, 7, 8, 9, 10, 11];
const instanceTypeFour = [18, 19, 20, 21, 22, 23];

const randomIndex = function (array) {
    const randomIndx = Math.floor(Math.random() * array.length);
    return array[randomIndx];
};

const instanceOne = randomIndex(instanceTypeOne);
const instanceTwo = randomIndex(instanceTypeTwo);
const instanceThree = randomIndex(instanceTypeThree);
const instanceFour = randomIndex(instanceTypeFour);

// first instance
const listElOne = document.getElementById("type0");
listElOne.innerHTML = instances[instanceOne].statement;
const inputEl1 = document.createElement("input");
inputEl1.setAttribute("data", instances[instanceOne].answer);
let responseEl1 = document.createElement("span");
responseEl1.setAttribute("class", "response-elm");
listElOne.appendChild(inputEl1)
listElOne.appendChild(responseEl1);

// second instance
const listElTwo = document.getElementById("type1");
listElTwo.innerHTML = instances[instanceTwo].statement;
const inputEl2 = document.createElement("input");
inputEl2.setAttribute("data", instances[instanceTwo].answer);
let responseEl2 = document.createElement("span");
responseEl2.setAttribute("class", "response-elm");
listElTwo.appendChild(inputEl2)
listElTwo.appendChild(responseEl2);

// third instance
const listElThree = document.getElementById("type2");
listElThree.innerHTML = instances[instanceThree].statement;
const inputEl3 = document.createElement("input");
inputEl3.setAttribute("data", instances[instanceThree].answer);
let responseEl3 = document.createElement("span");
responseEl3.setAttribute("class", "response-elm");
listElThree.appendChild(inputEl3)
listElThree.appendChild(responseEl3);

// fourth instance
const listElFour = document.getElementById("type3");
listElFour.innerHTML = instances[instanceFour].statement;
const inputEl4 = document.createElement("input");
inputEl4.setAttribute("data", instances[instanceFour].answer);
let responseEl4 = document.createElement("span");
responseEl4.setAttribute("class", "response-elm");
listElFour.appendChild(inputEl4)
listElFour.appendChild(responseEl4);

// grading
document.getElementById("check-ans").addEventListener("click", function () {
    const inputElms = document.querySelectorAll("input");
    const respElms = document.getElementsByClassName("response-elm");
    for (let index = 0; index < inputElms.length; index++) {
        const studentAnswer = inputElms[index].value;
        const teacherAnswer = inputElms[index].getAttribute("data");
        if (studentAnswer == teacherAnswer) {
            respElms[index].textContent = "Correct!"
        } else {
            respElms[index].textContent = "Try Again!"
        }
    }
});


// const decimalInstances = [
//     {
//         statement: "",
//         answer:
//     }
// ]