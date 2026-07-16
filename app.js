const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

let currentYear = new Date().getFullYear()

const updateTimer = () => {
    const TODAY = new Date()
    const FINAL = new Date(currentYear, 8, 18, 0, 0, 0, 0)
    const TIME_LEFT = new Date(FINAL - TODAY)
    days.innerText = String(Math.floor(TIME_LEFT / 1000 / 60 / 60 / 24)).padStart(2, "0");
    hours.innerText = String(Math.floor(TIME_LEFT / 1000 / 60 / 60) % 24).padStart(2, "0");
    minutes.innerText = String(Math.floor(TIME_LEFT / 1000 / 60) % 60).padStart(2, "0");
    seconds.innerText = String(Math.floor(TIME_LEFT / 1000) % 60).padStart(2, "0");

    if (TIME_LEFT <= 0) currentYear++
}

setInterval(updateTimer, 1000);