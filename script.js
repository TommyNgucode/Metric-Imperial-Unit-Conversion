/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterFeetVar = 3.281
const litersGallonVar = 0.264
const kilogramPoundsVar = 2.204

const inputBtn = document.getElementById('input-button')
const convertBtn = document.getElementById('convert-button')
const containerOne = document.getElementById('container-One')
const containerTwo = document.getElementById("container-Two")
const containerThree = document.getElementById("container-Three")

let measurementLength = ""

convertBtn.addEventListener("click", function() {


    let toFeet = inputBtn.value * meterFeetVar
    let toMeter = inputBtn.value / meterFeetVar
    containerOne.innerHTML = `<p>${inputBtn.value} meters = ${toFeet.toFixed(3)} feet | 20 feet = ${toMeter.toFixed(3)} meters</p>`

    
    let toLiters = inputBtn.value * litersGallonVar
    let toGallons = inputBtn.value / litersGallonVar
    containerTwo.innerHTML = `${inputBtn.value} liters = ${toGallons.toFixed(3)} gallons | 20 gallons = ${toLiters.toFixed(3)} liters`

    
    let toKilogram = inputBtn.value * kilogramPoundsVar
    let toPound = inputBtn.value / kilogramPoundsVar
    containerThree.innerHTML = `${inputBtn.value} kilos = ${toPound.toFixed(3)} pounds | 20 pounds = ${toKilogram.toFixed(3)} kilos`


})