// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} `

    + liscenseImage +

    `## Description

  ${data.description}

  ## Table Of Contents:

  -[Installation](#Installation) 
  -[Usage](#Usage) 
  -[Liscense](#Liscense) 
  -[Contributing](#Contributing) 
  -[Tests](#Tests)
  -[Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Liscense`

    + liscenseInfo +


    `## Contributing

  ${data.author}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this repo, open an issue or contact me directly at **${data.email}**. 
  You can find more of my work at [${data.github}](https://github.com/${data.github}/)

  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
  `;
}


module.exports = generateMarkdown;
