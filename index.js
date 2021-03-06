/* Imports */

const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generate");

/* Functions */

//Initializing function called when the application is run.
function init()
{
    //An array of the optional sections to be shown to the user.
    const options = ["Features", "Installation", "Technologies", "Usage", "Credits", "Contributing", "Tests", "Questions", "License"];
    inquirer
        .prompt([{
                type: "input",
                message: "Enter your GitHub username.",
                name: "userName"
            },
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
            {
            type: "checkbox",
            message: "Which of these sections would you like to include?",
            choices: options,
            name: "sections"
        }])
        .then(response => promptUser(response))
        .catch(error => console.error(error));
}

//Asks the user which sections they would like to include.
function promptUser(response)
{
    var chosenSections = response.sections;
    inquirer
        .prompt([{
        type: "input",
        message: "Describe the noteable features of your project.",
        when: chosenSections.includes("Features"),
        name: "features"
    },
    {
        type: "input",
        message: "Describe the installation instructions.",
        when: chosenSections.includes("Installation"),
        name: "installation"
    },
    {
        type: "checkbox",
        message: "Which technologies was the project created with?",
        choices: ["C/C++", "C#", "CSS", "Go", "HTML", "Java", "JavaScript", "MATLAB", "PHP", "Python", "R", "Swift"],
        when: chosenSections.includes("Technologies"),
        name: "technologies"
    },
    {
        type: "input",
        message: "Describe the usage instructions.",
        when: chosenSections.includes("Usage"),
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the GitHub usernames of any developers you need to credit, seperated by a space.",
        when: chosenSections.includes("Credits"),
        name: "credits"
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
    },
    {
        type: "input",
        message: "What is your email address?",
        when: chosenSections.includes("Questions"),
        validate: email =>//Taken from Stack Overflow, question 46155 (Couldn't find a user name for the answer I used.).
        {
            //BTW, regex are still an absolute clusterf**k.
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        name: "email"
    },
    {
        type: "list",
        message: "Which license does this project have?",
        choices: ["AGPL--3.0", "GPL--3.0", "LGPL--3.0", "MPL--2.0", "Apache--2.0", "MIT", "BSL--1.0", "Unlicense"],
        when: chosenSections.includes("License"),
        name: "license"
    }
])
        .then((answers) => writeToFile("./RENAMEME.md", generate(response, answers)))
        .catch(error => console.error(error));
}

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

/* Initialize */

init();
