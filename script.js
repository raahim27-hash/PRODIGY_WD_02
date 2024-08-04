var ms = 0, s = 0, m = 0, h = 0;
var timer;
var lapTimes = []; 

var display = document.querySelector(".timer-Display");
var lapsContainer = document.querySelector(".laps");
var outerCircle = document.querySelector(".outer-circle");

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
        outerCircle.classList.add("animation-bg");
    }
}

function run() {
    ms++; 
    if (ms == 100) {
        ms = 0;
        s++; 
    }
    if (s == 60) {
        s = 0;
        m++; 
    }
    if (m == 60) {
        m = 0;
        h++; 
    }
    display.innerHTML = getTimer(); 
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

function pause() {
    stopTimer();
    outerCircle.classList.remove("animation-bg");
}

function stopTimer() {
    clearInterval(timer); 
    timer = null; 
}

function reset() {
    stopTimer(); 
    outerCircle.classList.remove("animation-bg");
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer(); 
    lapTimes = []; 
    updateLaps(); 
}

function restart() {
    if (timer) {
        reset(); 
        start(); 
    }
}

function lap() {
    if (timer) {
        lapTimes.push(getTimer()); 
        updateLaps(); 
    }
}

function updateLaps() {
    lapsContainer.innerHTML = ""; 
    lapTimes.forEach(function(time, index) {
        var lapItem = document.createElement("li"); 
        lapItem.innerHTML = "Lap " + (index + 1) + ": " + time; 
        lapsContainer.appendChild(lapItem); 
    });
}

function resetLap() {
    lapTimes = []; 
    updateLaps(); 
}
