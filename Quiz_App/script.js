const body = document.querySelector("body");
const startBtn = document.querySelector(".start-now");
const mainPage = document.querySelector("main");
const quizPage = document.querySelector(".quiz");
const timerH = document.querySelector(".timer h3");
const timerElement = document.querySelector(".timer span");
const questionElement = document.querySelector(".question p");
const optionPage = document.querySelectorAll(".option");
const next = document.querySelector(".next");
const submit = document.querySelector(".submit");
const questionCount = document.querySelector('.qs-count')
const reatempt = document.querySelector('.popup button')
const popup = document.querySelector('.popup')
const volume = document.querySelector('.volume')
const audio_1 = document.querySelector('.audio-1')
const audio_2 = document.querySelector('.audio-2')

const option_1 = document.querySelector("#option-1 span");
const option_2 = document.querySelector("#option-2 span");
const option_3 = document.querySelector("#option-3 span");
const option_4 = document.querySelector("#option-4 span");

const trueOrFalse_1 = document.querySelector(".true-false-1");
const trueOrFalse_2 = document.querySelector(".true-false-2");
const trueOrFalse_3 = document.querySelector(".true-false-3");
const trueOrFalse_4 = document.querySelector(".true-false-4");



let result = 0
let num = 0
let intervalId


  const question = [
  ` Inside which HtML element do we put the javaScript?`,
  ` Father of coputer science`,
  ` Who is the capital of india`,
  'Which HTML tag is used to create a hyperlink?',
  'Which symbol is used for comments in JavaScript (single line)?',
  'Which CSS property controls the text size?',
  'Which language runs in a web browser?',
  'Which of the following is NOT a JavaScript data type?',
  ` Which device is used to connect multiple computers in a network?`,
  ` Which protocol is used to send emails?`,
  ` What does IP stand for?`,
  ` Which device is used to connect different networks?`,
  ` Which protocol is used to securely browse websites (with https)?`,
];

const answer = ["script", "Charles Babbage","Delhi","<a>","//","font-size","javaScript","Character","Switch",
  "SMTP",
  "Internet Protocol",
  "Router",
  "HTTPS",];

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
  2:{
    1: "Delhi",
    2: "Kolkta",
    3: "Mumbai",
    4: "Chenai",
  },
  3:{
    1: "<link>",
    2: "<a>",
    3: "<href>",
    4: "<hyper>",
  },
  4:{
    1: "/*",
    2: "//",
    3: "<!--",
    4: "**",
  },
  5:{
    1: "font-size",
    2: "text-style",
    3: "text-size",
    4: "font-waight",
  },
  6:{
    1: "python",
    2: "C++",
    3: "java",
    4: "javaScript",
  },
  7:{
    1: "string",
    2: "Number",
    3: "Boolean",
    4: "Character",
  },
  8: {
    1: "Switch",
    2: "Hub",
    3: "Bridge",
    4: "Repeater",
  },
  9: {
    1: "HTTP",
    2: "SMTP",
    3: "FTP",
    4: "POP3",
  },
  10: {
    1: "Internet Provider",
    2: "Internal Protocol",
    3: "Internet Protocol",
    4: "Intranet Process",
  },
  11: {
    1: "Switch",
    2: "Hub",
    3: "Router",
    4: "Repeater",
  },
  12: {
    1: "HTTP",
    2: "SSL",
    3: "HTTPS",
    4: "FTP",
  },
};

questionElement.innerText = `Q)${num + 1}. ${question[num]}`;

option_1.innerText = `${options[num][1]}`;
option_2.innerText = `${options[num][2]}`;
option_3.innerText = `${options[num][3]}`;
option_4.innerText = `${options[num][4]}`;


function questionOption(num){

  
  optionPage.forEach((option) => {
  option.addEventListener("click", (e) => {

   
    if (option.innerText === answer[num]) {

      if (option.innerText == options[num][1]) {
        
        trueOrFalse_1.classList.add("true");
        music()
        clearInterval(intervalId)
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
          
        });
        option.style.border = `${3}px solid `
      } else if (option.innerText == options[num][2]) {
        trueOrFalse_2.classList.add("true");
        music()
        clearInterval(intervalId)
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
        option.style.border = `${3}px solid `
      } else if (option.innerText == options[num][3]) {
        clearInterval(intervalId)
        trueOrFalse_3.classList.add("true");
        music()
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
        option.style.border = `${3}px solid `
      } else if (option.innerText == options[num][4]) {
        trueOrFalse_4.classList.add("true");
        music()
        clearInterval(intervalId)
        optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
        option.style.border = `${3}px solid `
      }
    } else 
      if (option.innerText === options[num][1]) {
      trueOrFalse_1.classList.add("false");
      music_2()
      clearInterval(intervalId)
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
        option.style.border = `${3}px solid `
    } else if (option.innerText === options[num][2]) {
      trueOrFalse_2.classList.add("false");
      music_2()
      clearInterval(intervalId)
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
        option.style.border = `${3}px solid `
    } else if (option.innerText === options[num][3]) {
      trueOrFalse_3.classList.add("false");
      music_2()
      clearInterval(intervalId)
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
        option.style.border = `${3}px solid `
    } else if (option.innerText === options[num][4]) {
      trueOrFalse_4.classList.add("false");
      music_2()
      clearInterval(intervalId)
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
        });
        option.style.border = `${3}px solid `
    } 
    else{}
  });
});

}


function timer() {
  let timeLength = 31;
  intervalId = setInterval(() => {
    timeLength -= 1;
    timerElement.innerText = timeLength;

    if(timerElement.innerText <= 15 && timerElement.innerText >= 5)
    {
      body.style.backgroundColor = '#E4E5C7'
      timerH.style.backgroundColor = '#c5b10090'
    }
    if(timerElement.innerText <= 5 && timerElement.innerText >= 0)
    {
      body.style.backgroundColor = '#DBADAD'
      timerH.style.backgroundColor = '#C50C006E'
    }

    if (timeLength < 10) {
      timerElement.innerText = "0" + timeLength;
    }
    if (timeLength === 0) {
      popup.style.display = 'block'
      optionPage.forEach((optio) => {
          optio.classList.add("cursor");
          
        });
        next.classList.add("cursor");
      clearInterval(intervalId);
    }
  }, 1000);
}


reatempt.addEventListener('click', () => {

  quizPage.style.display = "none";
  mainPage.style.display = "block";
  
    popup.style.display = 'none'


})


function music(){
  audio_1.currentTime = 0;
    audio_1.play();
}
function music_2(){
  audio_2.currentTime = 0;
    audio_2.play();
}

startBtn.addEventListener("click", () => {
// debugger
  next.classList.remove("cursor");
  optionPage.forEach((optio) => {
          optio.classList.remove("cursor");
          
        });


        optionPage.forEach(optio => {
    optio.classList.remove('cursor');
    optio.style.border =  ``;
  });


  mainPage.style.display = "none";
  quizPage.style.display = "block";

  timer()
  
});


if(num < 10)
  {
    questionCount.innerText = `0${num + 1}/25`
  }else{
    questionCount.innerText = `${num+ 1}/25`
  }
next.addEventListener('click', () => {
  clearInterval(intervalId)
  timer()
    num++
  if(num < question.length)
  {
    questionCount.innerText = `${num+ 1}/25`
  }
  [trueOrFalse_1, trueOrFalse_2, trueOrFalse_3, trueOrFalse_4].forEach((el) => {
    el.classList.remove('true');
    el.classList.remove('false');
  });
  optionPage.forEach(optio => {
    optio.classList.remove('cursor');
    optio.style.border =  ``;
  });


  if (num < question.length) {
    questionElement.innerText = `Q)${num + 1}. ${question[num]}`;
    option_1.innerText = options[num][1];
    option_2.innerText = options[num][2];
    option_3.innerText = options[num][3];
    option_4.innerText = options[num][4];
  }
  questionOption(num)

 
  if(num === question.length - 1)
  {
    next.classList.add('none')
    submit.classList.add('block') 
  }

  body.style.backgroundColor = ''
    timerH.style.backgroundColor = ''
   
})

  questionOption(num)

