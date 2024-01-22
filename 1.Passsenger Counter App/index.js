// // Grab the welcome-el paragraph and store it in a variable called welcomeEl

// let welcomeEl = document.getElementById("welcome-el")

// // // Create two variables (name & greeting) that contains your name
// // // and the greeting we want to render on the page

// let name = "Francisco"
// let greeting = "Hi, dear stranger nice to meet you "

// // // Render the welcome message using welcomeEl.innerText

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "🖐"

//1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    //2.Create a variable that contains both the count and the dash separator , i.e "12 - "
    let countStr = count + " - "
    //3.Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    //NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}

// function reset() {
//     count = 0
//     countEl.textContent = count

// }
