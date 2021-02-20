/* Imports */

const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generate");

/* Variables */

//The questions that are asked of the user.
const questions = [
    {
        type: "input",
        message: "Enter the title of your project.",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description"
    }
];

/* Functions */

//Writes the formatted data into the file.
function writeToFile(fileName, data)
{
    fs.writeFile(fileName, data, (error) =>
    {
        if (error)
            console.error(error);
        else
            console.log("Success!");
    });
}

//Initializing function called when the application is run.
function init()
{
    inquirer
        .prompt(questions)
        .then((answers) => { writeToFile("./NEWREADME.md", generate(answers));})
        .catch(error =>  { console.error(error); });
}

/* Initialize */

init();
