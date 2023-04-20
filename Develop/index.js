// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a short description of your project."
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command should be run to install dependencies for your project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about using the repo?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Please select from the options below to attach a license for your project.",
        choices: ['MIT', 'ISC', 'apache', 'None'],
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: "What does the user need to know about contributing to the repo?"
    }, 
    {
        type: 'input',
        name: 'tests',
        message: "What command should be run to run tests?"
    },
   
];

// Function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Success!');
        }
   }) 
};

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => writeToFile('README.md', generateMarkdown(data)))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();