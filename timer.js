const timer = document.querySelector(".timer");

const time = timer.querySelector(".time");

const minuts_display = time.querySelector(".time_display_min");
const seconds_display = time.querySelector(".time_display_sec");

const timeButtons = timer.querySelector(".time_buttons");
const actionButtons = timer.querySelector(".time_action_buttons");

let delayNames = [
    ["10 Сек", 10],
    ["5 минут", 300],
    ["15 минут", 900],
    ["25 минут", 1500]
];

let currentTimeDelay = null;

for (let index = 0; index < delayNames.length; index++) {
    const delay = delayNames[index];

    timeButtons.appendChild(createTimeButton(delay[0], delay[1]));
}

function createTimeButton(text, time) {
    let time_button = document.createElement("button");
    time_button.classList.add("time_button");
    time_button.textContent = text;
    time_button.addEventListener("click", function () {
        currentTimeDelay = time;
        setTime(time);
    });
    return time_button;
}

const startButton = actionButtons.children[0];
const stopButton = actionButtons.children[1];

let timerInterval = null;
let timerStop = null;

let localTime = localStorage.getItem('timerTime') || 10

startButton.addEventListener('click', function(){
    stopButton.removeAttribute('disabled');
    stopButton.textContent = "Стоп";
    isStop = false;
    let time = localTime - 1

    timerInterval = setInterval(()=>{
        let currentTime = Number(minuts_display.textContent) * 60 + Number(seconds_display.textContent)
        currentTime--;
        let minuts = Math.floor(Number(currentTime) / 60);
        let seconds = Number(currentTime) % 60;
        
        minuts_display.textContent = minuts < 10 ? `0${minuts}` : minuts;
        seconds_display.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);

    timerStop = setTimeout(()=>{
        clearInterval(timerInterval);
    }, (Number(time)+1)*1000);

    startButton.setAttribute('disabled', '');
});

let isStop = true;
stopButton.addEventListener('click', function(){
    startButton.removeAttribute('disabled');
    isStop = !isStop;
    if (isStop) {  
        clearInterval(timerInterval);
        clearTimeout(timerStop);
        stopButton.textContent = "Рестарт";
    }
    else{
        stopButton.textContent = "Стоп";
        setTime(currentTimeDelay)
        stopButton.setAttribute('disabled', '');
    }
});

function setTime(time){
    let minuts = Math.floor(Number(time) / 60);
    let seconds = Number(time) % 60;
    localTime = minuts * 60 + seconds
    localStorage.setItem('timerTime', localTime)
    console.log(localTime)
    minuts_display.textContent = minuts < 10 ? `0${minuts}` : minuts;
    seconds_display.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

currentTimeDelay = delayNames[0][1];
setTime(localTime);