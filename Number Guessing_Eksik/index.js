const down = document.querySelector(".down")
const up = document.querySelector(".up")
const guess = document.querySelector("#guess-number")
const guessBtn = document.querySelector("#guess-btn")
const report = document.querySelector(".report")
const attempts = document.querySelector(".attempts")
const easy = document.querySelector("#easy")
const hard = document.querySelector("#hard")
const resetBtn = document.querySelector(".reset")


function randomNumber(){
    return Math.floor(Math.random() * 100) +1
}

console.log(randomNumber);