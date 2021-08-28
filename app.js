const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

let currentYear = new Date().getFullYear()

const updateTimer = () => {
    const TODAY = new Date()
    const FINAL = new Date(currentYear, 8, 18, 0, 0, 0, 0)
    const TIME_LEFT = new Date(FINAL - TODAY)
    days.innerText = Math.floor(TIME_LEFT / 1000 / 60 / 60 / 24);
    hours.innerText = Math.floor(TIME_LEFT / 1000 / 60 / 60) % 24 + 1;
    minutes.innerText = Math.floor(TIME_LEFT / 1000 / 60) % 60;
    seconds.innerText = Math.floor(TIME_LEFT / 1000) % 60;

    if (TIME_LEFT <= 0) currentYear++
}

setInterval(updateTimer, 1000);