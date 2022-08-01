"use strict"
//BLACKJACK//
/*
Aim of the game is to get as close to 21 as possible
21 = WIN
Anything above = LOSS
Anything under = Still in the game

Ace = 11
King = 10
*/


let firstCard = 13
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Don't EVER gamble again!"
    hasBlackJack = true
} else {
    message = "You'd already lost when you clicked play!"
    isAlive = false
}

console.log(message)





// let age = 100

// if (age < 100) {
//     console.log("You're too young")
// } else if (age === 100) {
//     console.log("Here's your card")
// } else {
//     console.log("You already have one!")
// }

// console.log(4 === 3) false
// console.log(5 > 2) true
// console.log(12 > 12) false
// console.log(3 < 0) false
// console.log(3 >= 3) true
// console.log(11 <= 11) true
// console.log(3 <= 2) false

