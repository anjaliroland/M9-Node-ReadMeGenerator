// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// Title of project

// Sections for:
// Description
// Table of Contents
// 	    that have links to take to corresponding section
// Installation
// Usage
// 	    !screenshot
// License
// 	    list of options
// 	    badge for that license is added near top of readme
// 	    a notice is added to license sections that explains which license the application is covered under
// Contributing
// Tests
// Questions
// 	    GitHub 
// 		    username and link to profile
// 	    email 
// 		    address w/ instructions on how to reach with on additional questions

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
        type: 'input',
        name: 'screenshot',
        message: "If you have any screenshots of your project you would like to show please enter the file path, if none click enter to continue."
    },
    {
        type: 'list',
        name: 'license',
        message: "Please select from the options below to attach a license for your project.",
        choices: ['MIT', 'Mozilla', ]
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();