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


let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard() {
    return 5
}


function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Don't EVER gamble again!"
        hasBlackJack = true
    } else {
        message = "You'd already lost when you clicked play!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    
    cardsEl.textContent += "" + card
    renderGame()
    
}


/////////////////// if Statements ///////////////////
// let age = 100

// if (age < 100) {
//     console.log("You're too young")
// } else if (age === 100) {
//     console.log("Here's your card")
// } else {
//     console.log("You already have one!")
// }

/////////////////// Comparison Statements ///////////////////
// console.log(4 === 3) false
// console.log(5 > 2) true
// console.log(12 > 12) false
// console.log(3 < 0) false
// console.log(3 >= 3) true
// console.log(11 <= 11) true
// console.log(3 <= 2) false

/////////////////// Arrays ///////////////////
// let bilal = [
//     "Too tall apparently", 
//     24, 
//     "likePizza = true"
// ]

// console.log(featuredPosts[0])
// console.log(featuredPosts[1])
// console.log(featuredPosts[2])

// let messages = [
//     "Hey, how are you",
//     "I'm great thanks",
//     "All good. Been working on my portfolio lately"
// ]

// console.log(messages) // Getting used to this
// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)

/////////////////// for Loops ///////////////////
// for ( let i = 0; i <= cards.length; i++) {
//     console.log(cards[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Bilal"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

/////////////////// return Keyword ///////////////////
// let player1Time = 105
// let player2Time = 50

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)  
