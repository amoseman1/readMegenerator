// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${displayBadge(data)}

  ## Description

  ${data.description}

  ## Table Of Contents:

  [Installation](#Installation) 
  [Usage](#Usage) 
  [Liscense](#Liscense) 
  [Contributing](#Contributing) 
  [Tests](#Tests)
  [Questions](#Questions)

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

  If you have any questions about this repo, open an issue or contact me directly at **${data.email}**. 
  You can find more of my work at [${data.github}](https://github.com/${data.github}/)

  [Contributor Covenant](https://www.contributor-covenant.org/)
  `;
}
//need function for selecting the right badge icon from users liscense choice
function displayBadge(data) {
  // ${data.liscense !== "none" ? [liscense badge](https://img.shields.io/static/v1?label=License&message=MIT&color=9cf): null}
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
}

module.exports = generateMarkdown;
