/* Imports */

const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generate");

/* Functions */

//Initializing function called when the application is run.
function init()
{
    // const options = questions.map(option => 
    //     {
    //         var name = option.name;
    //         return name.charAt(0).toUpperCase() + name.slice(1);
    //     });
    const options = ["Installation", "Usage", "Credits", "License", "Contributing", "Tests", "Questions"];
    inquirer
        .prompt(
            [{
                type: "input",
                message: "Enter the title of your project.",
                name: "title"
            },
            {
                type: "input",
                message: "Describe your project.",
                name: "description"
            },
            {
            type: "checkbox",
            message: "Which of these sections would you like to include?",
            choices: options,
            name: "sections"
        }])
        .then(response => promptUser(response))
        .catch(error => console.error(error));
}

function promptUser(response)
{
    var chosenSections = response.sections;
    inquirer.prompt([
    {
        type: "input",
        message: "Describe the installation instructions.",
        when: chosenSections.includes("Installation"),
        name: "installation"
    },
    {
        type: "input",
        message: "Describe the usage instructions.",
        when: chosenSections.includes("Usage"),
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the usernames of any developers you need to credit.",
        when: chosenSections.includes("Credits"),
        name: "credits"
    },
    {
        type: "list",
        message: "Which license does this project have?",
        choices: ["AGPLv3", "GPLv3", "LGPLv3", "Mozilla Public 2.0", "Apache 2.0", "MIT", "Boost Software 1.0", "The Unilicense"],
        when: chosenSections.includes("License"),
        name: "license"
    },
    {
        type: "input",
        message: "Describe how a user can contribute to this project.",
        when: chosenSections.includes("Contributing"),
        name: "contributing"
    },
    {
        type: "input",
        message: "Include the test information here.",
        when: chosenSections.includes("Tests"),
        name: "tests"
    },
    {
        type: "input",
        message: "Put frequently asked questions here.",
        when: chosenSections.includes("Questions"),
        name: "questions"
    }
])
        .then((answers) => writeToFile("./NEWREADME.md", generate(response, answers)))
        .catch(error => console.error(error));
}

//Writes the formatted data into the file.
function writeToFile(fileName, data)
{
    console.log(data);
    // fs.writeFile(fileName, data, (error) =>
    // {
    //     if (error)
    //         console.error(error);
    //     else
    //         console.log("Success!");
    // });
}

/* Initialize */

init();
