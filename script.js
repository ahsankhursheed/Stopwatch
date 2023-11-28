// DOM Grabbers

let displayRestart = document.querySelector('.restartBtn')
displayRestart.style.display = "none"

const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')
const timerReading = document.querySelector('.secondHeading')


// Variables

let initialTime = 8
let timeInSeconds = 0
let timeInMinutes = 9 
let timeInHours = 0
let intervalId


// Methods

function forSecondsInZero(){
    if(timeInMinutes > 9 && (timeInHours > 9)) {
        timerReading.innerHTML = `<h2 class="secondHeading">${timeInHours}<span class="subs">h</span> ${timeInMinutes}<span class="subs">m</span> 0${initialTime++}<span class="subs">s</span></h2>`
    }
    else if(timeInMinutes > 9 && timeInHours < 10) {
        timerReading.innerHTML = `<h2 class="secondHeading">0${timeInHours}<span class="subs">h</span> ${timeInMinutes}<span class="subs">m</span> 0${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes < 10 && timeInHours > 9) {
        timerReading.innerHTML = `<h2 class="secondHeading">${timeInHours}<span class="subs">h</span> 0${timeInMinutes}<span class="subs">m</span> 0${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes < 10 && timeInHours < 10){
        timerReading.innerHTML = `<h2 class="secondHeading">0${timeInHours}<span class="subs">h</span> 0${timeInMinutes}<span class="subs">m</span> 0${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes < 10) {
        timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> 0${timeInMinutes}<span class="subs">m</span> 0${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes > 9) {
        timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> ${timeInMinutes}<span class="subs">m</span> 0${initialTime++}<span class="subs">s</span></h2>`
    }
    else {
    timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> 00<span class="subs">m</span> 0${initialTime++}<span class="subs">s</span></h2>`
    }
}

function forSecondsAboveTen(){
    if(timeInMinutes > 9 && timeInHours > 9) {
        timerReading.innerHTML = `<h2 class="secondHeading">${timeInHours}<span class="subs">h</span> ${timeInMinutes}<span class="subs">m</span> ${initialTime++}<span class="subs">s</span></h2>`
    }
    else if(timeInMinutes > 9 && timeInHours < 10) {
        timerReading.innerHTML = `<h2 class="secondHeading">0${timeInHours}<span class="subs">h</span> ${timeInMinutes}<span class="subs">m</span> ${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes < 10 && timeInHours > 9) {
        timerReading.innerHTML = `<h2 class="secondHeading">${timeInHours}<span class="subs">h</span> 0${timeInMinutes}<span class="subs">m</span> ${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes < 10 && timeInHours < 10){
        timerReading.innerHTML = `<h2 class="secondHeading">0${timeInHours}<span class="subs">h</span> 0${timeInMinutes}<span class="subs">m</span> ${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes < 10) {
        timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> 0${timeInMinutes}<span class="subs">m</span> ${initialTime++}<span class="subs">s</span></h2>`
    }
    else if (timeInMinutes > 9) {
        timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> ${timeInMinutes}<span class="subs">m</span> ${initialTime++}<span class="subs">s</span></h2>`
    }
    else {
    timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> 00<span class="subs">m</span> ${initialTime++}<span class="subs">s</span></h2>`
    }
}

function forMinutes(){
    initialTime = 0
    timeInMinutes++
    if (initialTime < 10) {
        forSecondsInZero()
    } else if (initialTime > 9) {
        forSecondsAboveTen()
    }
    console.log(`initial: ${initialTime}`)
    console.log('Time in mins:', timeInMinutes);
}

function forHours(){
    initialTime = 0 
    timeInMinutes = 0 
    timeInHours++
    if (initialTime < 10) {
        forSecondsInZero()
    } else if (initialTime > 9) {
        forSecondsAboveTen()
    }
}

startBtn.addEventListener('click', startTimer)

function restartingTimer() {
    initialTime = 8
    timeInMinutes = 9
    timeInHours = 0
    clearInterval(intervalId)
    intervalId = null
    displayRestart.style.display = "block"
}


displayRestart.addEventListener('click', function(){
    displayRestart.style.display = "none"
    startBtn.style.display = "block"
    stopBtn.style.display = "block"
    resetBtn.style.display = "block"
    timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> 00<span class="subs">m</span> 00<span class="subs">s</span></h2>`
    startTimer()
})

function startTimer() {
    if (intervalId == null){
        intervalId = setInterval(function(){
            if (initialTime < 10) {
                forSecondsInZero()
            } 
            else if (initialTime > 9 && initialTime < 12 ){
                forSecondsAboveTen()
            } 
            else if (initialTime >= 12 && timeInMinutes < 10) {
                forMinutes()
            }
            else if (timeInMinutes > 9 && timeInHours < 11) {
                console.log(`Time Hours: ${timeInHours}`)
                forHours()
            }
            else {
                console.log(`Time Hours: ${timeInHours}`)
                timerReading.innerHTML = `<p class = "firstHeading">1 Day Completed<p>`
                startBtn.style.display = "none"
                stopBtn.style.display = "none"
                resetBtn.style.display = "none"
                restartingTimer()
            }
        },1000)
    }
}

function stopTimer(){
    clearInterval(intervalId)
    intervalId = null
}

stopBtn.addEventListener('click', stopTimer)

function resetTimer(){
    initialTime = 8
    timeInMinutes = 0
    timeInHours = 0
    clearInterval(intervalId)
    intervalId = null
    timerReading.innerHTML = `<h2 class="secondHeading">00<span class="subs">h</span> 00<span class="subs">m</span> 00<span class="subs">s</span></h2>`
}

resetBtn.addEventListener('click', resetTimer)

