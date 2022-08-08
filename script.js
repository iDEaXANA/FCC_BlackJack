"use strict"
//BLACKJACK//
/*
Aim of the game is to get as close to 21 as possible
21 = WIN
Anything above = LOSS
Anything under = Still in the game

Ace = 11 (and also 1)
King = 10
Queen = 10
Jack = 10
*/


let player = {
    name:"Bilal",
    chips: 178
}
let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber =  Math.ceil(Math.random()*13) 
    console.log(randomNumber)

    if (randomNumber === 1) { // I had assigned it instead asfhasuogasuof
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
    
}


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
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
        message = "You 'won'"
        hasBlackJack = true
    } else {
        message = "You'd already lost when you clicked play!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        cardsEl.textContent += "" + card
        renderGame()
    }
   
}
///////////////////               ///////////////////
/////////////////// Project Notes ///////////////////
// The ace card takes dual values, 1 and 11. How can i implement this?

///////////////////               ///////////////////
///////////////////               ///////////////////

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

/////////////////// Math.random (dice) ///////////////////
// let randomNumber = Math.random()

// console.log(randomNumber)
    
// Your answer: It generates a random number between 0-1 exclusive.

// let flooredNumber = Math.floor(-3.45632)

// console.log(flooredNumber)

// Your answer: It rounds the value down to the nearest integer.

// let randomNumber = Math.floor(Math.random() * 6)

// console.log(randomNumber)

// Your answer: Values will be between 0-5, not 1-6.

// let randomNumber = Math.ceil(Math.random() * 6)

// console.log(randomNumber)

// Your answer: I could've added 1 to the end of the function too.

// function rollDice() {
//     let randomNumber = Math.ceil(Math.random() * 6)
//     return randomNumber
// }

// console.log (rollDice())

/////////////////// Boolean (logical) Operators ///////////////////
// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse && givesCertificate) {
//     generateCertificate()
// }
// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false
// let hasHintLeft = false

// function showSolution() {
//     if (hasSolvedChallenge === false && hasHintLeft === false)
//     console.log("Showing the solution...")
// }
// showSolution()

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

/////////////////// Objects ///////////////////
// let course = {
//     title: "learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags[1])

// let castle = {
//     name: "GIGACHAD",
//     price: 190,
//     descriptionKey: ["Ancient", "Sweeden", "Kings"],
//     isAvailable: true
// }

// console.log(castle.name)
// console.log(castle.isAvailable)

