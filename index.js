#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number - done
// 2) user input for guessing number - done
// 3) compare user input with computer generate number and slow result - done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number: ",
    },
]);
if (answers.userguessednumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
