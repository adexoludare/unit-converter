/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
// const convertBtn = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let inputValue = ""

let meter = ""
let feet = ""

let gallon = ""
let liter = ""

let kilogram = ""
let pound = ""


function convert(){
    inputValue = inputEl.value
    feet = (inputValue * 3.281).toFixed(2)
    meter = (inputValue/3.281).toFixed(2)

    gallon = (inputValue * 0.264).toFixed(2)
    liter = (inputValue/0.264).toFixed(2)

    pound = (inputValue * 2.204).toFixed(2)
    kilogram = (inputValue/2.204).toFixed(2)

    renderResult()
}

function renderResult(){
    lengthEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters`

    volumeEl.textContent = `${inputValue} liters = ${gallon} gallons | ${inputValue} gallons = ${liter} liter`

    massEl.textContent = `${inputValue} kilograms = ${pound} pounds | ${inputValue} pounds = ${kilogram} kilograms`
}