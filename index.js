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
    },
];

/* Functions */

function promptUser(sectionsArr)
{
    console.log(sectionsArr);
    inquirer.prompt(questions)
        .then((answers) => writeToFile("./NEWREADME.md", generate(answers)))
        .catch(error => console.error(error));
}

//Writes the formatted data into the file.
function writeToFile(fileName, data)
{
    // fs.writeFile(fileName, data, (error) =>
    // {
    //     if (error)
    //         console.error(error);
    //     else
    //         console.log("Success!");
    // });
}

//Initializing function called when the application is run.
function init()
{
    inquirer
        .prompt({
            type: "checkbox",
            message: "Which of these sections would you like to include?",
            choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"],
            name: "sections"
        })
        .then(sections => promptUser(sections.sections))
        .catch(error => console.error(error))
}

/* Initialize */

init();
