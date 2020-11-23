//need function for selecting the right badge icon from users liscense choice
function displayBadge(data) {
  const badgeLiscense = (data.liscense !== "none") ? `[![liscense badge]("https://img.shields.io/badge/license-${data.liscense}-blue.svg")]` :
    null
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

 ${badgeLiscense}

  ## Description

  ${data.description}

  ## Table Of Contents:

  -[Installation](#Installation) </br>
  -[Usage](#Usage) </br>
  -[Liscense](#Liscense) </br> 
  -[Contributing](#Contributing) </br> 
  -[Tests](#Tests) </br>
  -[Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Liscense 

  ${data.liscense}

  ## Contributing

  ${data.author}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this repo, open an issue or contact me directly at **${data.email}**. </br>
  You can find more of my work at Github: [${data.github}](https://github.com/${data.github}/)

  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
  `;
}



module.exports = generateMarkdown;
