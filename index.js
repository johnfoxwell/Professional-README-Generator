// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title of your project: "
    },
    {
        type: "input",
        name: "description",
        message: "Project Description: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any instructions for installation: "
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter any usage information: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter any guidelines for users to make contributions for your app: "
    },
    {
        type: "input",
        name: "test",
        message: "Please enter any testing instructions for your app: "
    },
    {
        type: "list",
        name: "license",
        message: "Please pick a license: ",
        choices: ["MIT", "None"]
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: "
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your GitHub username: "
    },
    {
        type: "input",
        name: "githubLink",
        message: "Link to GitHub: "
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(fileName + " has been created!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile("./assets/README.md", generateMarkdown(answers))
    })
    .catch((err) => {
        console.log(err)
    })
}

// Function call to initialize app
init();
