'use strict'

let number, guess;

function init(){
    document.getElementById("new-game-button").hidden = true;
}

function start(){
    document.getElementById("guess").hidden = false;
    document.getElementById("start-button").hidden = true;
    gameSetup();
}

function newGame(){
    document.getElementById("guess").hidden = false;
    document.getElementById("new-game-button").hidden = true;
    gameSetup();
}

function gameSetup(){
    number = getRandomNumber(1, 20);
    console.log("number = " + number);
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * max) + min;
}

function guessNumber(){
    guess = parseInt(document.getElementById("input-guess").value);
    console.log("guess = " + guess);

    compare();
    document.getElementById("input-guess").value = "";
}

function compare(){
    if(guess > number){
        Swal.fire({
            title: 'TOO HIGH',
            text: 'Your guess is higher than what I am thinking.',
            icon: 'error',
            confirmButtonText: 'Give it another go'
        })
        //alert("Your guess is higher than what I am thinking.");
    }else if(guess < number){
        Swal.fire({
            title: 'TOO LOW',
            text: 'Your guess is lower that what I am thinking',
            icon: 'error',
            confirmButtonText: 'Give it another go'
        })
        //alert("Your guess is lower that what I am thinking");
    }else if(guess === number){
        Swal.fire({
            title: 'RIGHT ON!!',
            text: 'Your guess is right on!',
            icon: 'success',
            confirmButtonText: 'Nice Job!'
        })
        //alert("Your guess is right on!");
        endGame();
    }else{
        console.log("there was an issue with the comparison.");
    }
}

function endGame(){
    document.getElementById("guess").hidden = true;
    document.getElementById("new-game-button").hidden = false;
}
