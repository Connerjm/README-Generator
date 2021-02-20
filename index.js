// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generate");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter the title of your project.",
        name: "title"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init()
{
    var markdown;
    inquirer
        .prompt(questions)
        .then((answers) => markdown = generate(answers))
        .catch(error =>  { console.error(error); });
    writeToFile("./results/README.md", markdown);
}

// Function call to initialize app
init();
