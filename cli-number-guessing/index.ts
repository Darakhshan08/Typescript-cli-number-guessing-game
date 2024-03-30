#! /usr/bin/env node

import inquirer from "inquirer";

//1) comuter will generate a random number

//2) user input for guessing number

//3) compare user input with computer generated number and show result
//-----------------------------

// const randomNumber = 13;
const randomNumber = Math.floor(Math.random()* 10 + 1);

const answer = await inquirer.prompt([{

    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-10:",


}]);

if(answer.userGuessedNumber === randomNumber)
{
    console.log("congratulation! you guessed right number.");

}else{
    console.log("you guessed wrong number");

}


