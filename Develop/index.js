const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path")

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a short description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions and/or examples for your project?',
    },
    {
        type: 'list',
        name: 'liscense',
        message: 'Which liscense would you like to use?',
        choices: ["GPL", "Apache 2.0", "BSD", "MIT", "none"]
    },
    {
        type: 'input',
        name: 'author',
        message: 'Who is the author? Are there any collaborators?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands should be run to test the application?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

];

// function to write README file
function writeToFile(filename, data) {
    return writeFileAsync(path.join(process.cwd(), filename), data)
        .then(() => console.log('Successfully wrote to README.md file'))
        .catch((err) => console.error(err));
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("README.md", generateMarkdown(answers))

        })


}

// function call to initialize program
init();
