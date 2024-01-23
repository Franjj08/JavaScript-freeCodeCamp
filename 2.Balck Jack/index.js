let firstCard = 11
let secondCard = 10
let hasBalckJack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21){
    message = "Wohoo! You've got Blacjack"
    hasBalckJack = true
} else{
    message = "You're out of the game!"
    isAlive = false
}
// when we use == it works in case of 100 =="100"
// When we use == ir doesn't work in 100 === "100"
console.log(message)