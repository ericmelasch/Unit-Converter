const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const unit1 = document.getElementById("meter")
const unit2 = document.getElementById("volume")
const unit3 = document.getElementById("mass")

// für Speicher funktion
let previousArrMeter = []
let previousArrLiter = []
let previousArrKilogram = []

const previousTxtM = document.getElementById("previous-txt-m")
const previousTxtL = document.getElementById("previous-txt-l")
const previousTxtK = document.getElementById("previous-txt-k")
//

let inputNum = ""
inputBtn.addEventListener("click", function(){
    inputNum = inputEl.value
    meter(inputNum)
    liter(inputNum)
    kilogram(inputNum)
})

let inputNumMeter = ""
let inputNumFeet = ""
function meter(inputNum) {
   inputNumMeter = Number(inputNum) * 3.281
   inputNumMeter = inputNumMeter.toFixed(3)
   inputNumFeet = Number(inputNum) / 3.281
   inputNumFeet = inputNumFeet.toFixed(3)
   unit1.textContent = `${inputNum} meters = ${inputNumMeter} feet | ${inputNum} feet = ${inputNumFeet} meters`
   //Speicher funktion
   previousArrMeter += `${unit1.textContent}<br>`
   //
}

let inputNumLiter = ""
let inputNumGallon = ""
function liter(inputNum) {
   inputNumLiter = Number(inputNum) * 0.264
   inputNumLiter = inputNumLiter.toFixed(3)
   inputNumGallon = Number(inputNum) / 0.264
   inputNumGallon = inputNumGallon.toFixed(3)
   unit2.textContent = `${inputNum} liters = ${inputNumLiter} gallon | ${inputNum} gallon = ${inputNumGallon} liters`
   //Speicher funktion
   previousArrLiter += `${unit2.textContent}<br>`
   //
}

let inputNumKilogram = ""
let inputNumPound = ""
function kilogram(inputNum) {
   inputNumKilogram = Number(inputNum) * 2.204
   inputNumKilogram = inputNumKilogram.toFixed(3)
   inputNumPound = Number(inputNum) / 2.204
   inputNumPound = inputNumPound.toFixed(3)
   unit3.textContent = `${inputNum} kilograms = ${inputNumKilogram} pound | ${inputNum} pound = ${inputNumPound} kilograms`
   //Speicher funktion
   previousArrKilogram += `${unit3.textContent}<br>`
   //
}

//Speicherung erst ab zweiten Klick des Buttons
let timesClicked = 0;
inputBtn.addEventListener("click", function(){
    timesClicked++;

    if (timesClicked > 1 ) {
        previousTxtM.innerHTML = previousArrMeter
        previousTxtL.innerHTML = previousArrLiter
        previousTxtK.innerHTML = previousArrKilogram
    }
})

//













/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/