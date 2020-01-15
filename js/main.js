'use strict'

let number, guess;

function init(){
    document.getElementById("new-game-button").hidden = true;
}

function start(){
    document.getElementById("range").hidden = false;
    document.getElementById("start-button").hidden = true;
}

function newGame(){
    document.getElementById("range").hidden = false;
    document.getElementById("new-game-button").hidden = true;
}

function submitRange(){
    let min = parseInt(document.getElementById("input-range-min").value);
    let max = parseInt(document.getElementById("input-range-max").value);
    validateInput(min, max) ? document.getElementById("range-button").disabled = false : document.getElementById("range-button").disabled = true ;

    document.getElementById("guess").hidden = false;
    document.getElementById("range").hidden = true;
    document.getElementById("input-range-min").value = "";
    document.getElementById("input-range-max").value = "";
}

function validateInput(min, max){
    let valid = false;
    if(Number.isInteger(min) && Number.isInteger(max)){
        console.log("valid input");
        return true;
    }else{
        console.log("invalid input");
        return false;
    }
}

function gameSetup(min, max){
    number = getRandomNumber(min, max);
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
