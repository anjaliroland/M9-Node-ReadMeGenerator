// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of the project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of the project?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps a developer needs to take to install your project? If none click enter to continue"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How would someone use your project?"
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
        message: "Input anyone or anything you want to give credit to."
    }, 
    {
        type: 'input',
        name: 'tests',
        message: "Enter any information you want to share about tests for your project. If none click enter to continue."
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    }
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