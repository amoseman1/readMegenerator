// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${displayBadge(data)}

  ## Description

${data.description}

## Table Of Contents:

[Installation](#Installation) 
(#Usage) 
(#Liscense) 
(#Contributing) 
(#Tests)
(#Questions)












## Questions

If you have any questions about this repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [${data.github}](https://github.com/${data.github}/)


  [Contributor Covenant](https://www.contributor-covenant.org/)
`;
}
//need function for selecting the right badge icon from users liscense choice
// function displayBadge(data) {${data.liscense !== "none" ? [liscense badge](https://img.shields.io/static/v1?label=License&message=MIT&color=9cf): null}
// }

module.exports = generateMarkdown;
