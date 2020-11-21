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
        choices: ["Apache 2.0", "GPLv3", "ISC", "MIT", "none"]
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


            //need function for selecting the right badge icon from users liscense choice
            //function displayBadge(data) {
            // ${data.liscense !== "none" ? [liscense badge](https://img.shields.io/static/v1?label=License&message=MIT&color=9cf): null}
            var licenseImage = "";
            switch (data.license) {
                case "Apache 2.0":
                    licenseImage =
                        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                case "GPLv3":
                    licenseImage =
                        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                case "ISC":
                    licenseImage =
                        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                    break;
                case "MIT":
                    licenseImage =
                        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                default:
                    break;
            }
            //}
            var licenseInfo = "";

            switch (data.license) {
                case "Apache 2.0":
                    licenseInfo =
                        "The Apache License 2.0 makes sure that the user does not have to worry about infringing any patents by using the software. The user is granted a license to any patent that covers the software. This license is terminated if the user sues anyone over patent infringement related to this software. This condition is added in order to prevent patent litigations.";
                    break;
                case "GPLv3":
                    licenseInfo =
                        "Software under the GPL may be run for all purposes, including commercial purposes and even as a tool for creating proprietary software, such as when using GPL-licensed compilers. Users or companies who distribute GPL-licensed works (e.g. software), may charge a fee for copies or give them free of charge. This distinguishes the GPL from shareware software licenses that allow copying for personal use but prohibit commercial distribution, or proprietary licenses where copying is prohibited by copyright law. The FSF argues that freedom-respecting free software should also not restrict commercial use and distribution (including redistribution).";
                    break;
                case "ISC":
                    licenseInfo =
                        "The ISC License grants permission to use, copy, modify, and/or distribute this software for any purpose with or without fee, provided that the copyright notice and this permission notice appear in all copies.";
                    break;
                case "MIT":
                    licenseInfo =
                        "The MIT License grants permission, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.";
                    break;
                default:
                    break;
            }
        })
}

// function call to initialize program
init();
