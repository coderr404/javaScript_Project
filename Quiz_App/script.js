const startBtn = document.querySelector(".start-now");
const mainPage = document.querySelector("main");
const quizPage = document.querySelector(".quiz");
const timerElement = document.querySelector(".timer span");
const questionElement = document.querySelector(".question p");
const optionPage = document.querySelectorAll(".option");
const next = document.querySelector(".next");

const option_1 = document.querySelector("#option-1 span");
const option_2 = document.querySelector("#option-2 span");
const option_3 = document.querySelector("#option-3 span");
const option_4 = document.querySelector("#option-4 span");

const trueOrFalse_1 = document.querySelector(".true-false-1");
const trueOrFalse_2 = document.querySelector(".true-false-2");
const trueOrFalse_3 = document.querySelector(".true-false-3");
const trueOrFalse_4 = document.querySelector(".true-false-4");

let num = 1;
const question = [
  `Q)${num + 1}. Inside which HtML element do we put the javaScript?`,
  `Q)${num + 1}. Father of coputer science`,
];

const answer = ["script", "Charles Babbage"];

const options = {
  0: {
    1: "js",
    2: "scripting",
    3: "javaScript",
    4: "script",
  },

  1: {
    1: "Alan Turing",
    2: "Charles Babbage",
    3: "Jphn McCarthy",
    4: "German Enigma",
  },
};

questionElement.innerText = question[num];

option_1.innerText = `${options[num][1]}`;
option_2.innerText = `${options[num][2]}`;
option_3.innerText = `${options[num][3]}`;
option_4.innerText = `${options[num][4]}`;

optionPage.forEach((option) => {
  option.addEventListener("click", (e) => {
    // debugger
    // console.log(option.innerText)
    if (option.innerText === answer[num]) {
      if (option.innerText == options[num][1]) {
        trueOrFalse_1.classList.add("true");
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
      } else if (option.innerText == options[num][2]) {
        trueOrFalse_2.classList.add("true");
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
      } else if (option.innerText == options[num][3]) {
        trueOrFalse_3.classList.add("true");
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
      } else if (option.innerText == options[num][4]) {
        trueOrFalse_4.classList.add("true");
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
      }
    } else if (option.innerText === options[num][1]) {
      trueOrFalse_1.classList.add("false");
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
    } else if (option.innerText === options[num][2]) {
      trueOrFalse_2.classList.add("false");
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
    } else if (option.innerText === options[num][3]) {
      trueOrFalse_3.classList.add("false");
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
    } else if (option.innerText === options[num][4]) {
      trueOrFalse_4.classList.add("false");
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
    }

    // if(option.innerText === answer[num])
    //   {
    //     // trueOrFalse_1.classList.add('true')
    //   }
    // if(option.innerText === answer[num])
    //   {
    //     // trueOrFalse_1.classList.add('true')
    //   }
  });
});

// optionPage.addEventListener('click', ()=> {
//   console.log('click')
//   optionPage.innerText = 'wrong'
// })

function timer() {
  let timeLength = 30;
  const intervalId = setInterval(() => {
    timeLength -= 1;
    timerElement.innerText = timeLength;
    if (timeLength < 10) {
      timerElement.innerText = "0" + timeLength;
    }
    if (timeLength === 0) {
      // alert('stop time')
      clearInterval(intervalId);
    }
  }, 1000);
}

startBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  quizPage.style.display = "block";

  timer();
});
