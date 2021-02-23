// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

/* Main function */

// Takes the object from inquirer and parses it into a big string.
function generate(requiredData, optionalData)
{
  const optionsArr = requiredData.sections;

  //Title.
  var title = `# ${requiredData.title}\n\n`;
  
  //Table of contents.
  var toc = `## Table of Contents\n\n- [Description](#description)\n`;
  for (let i = 0; i < optionsArr.length; i++)
  {
    let option = optionsArr[i];
    toc += `- [${option}](#${option.toLowerCase()})\n`;
  }
  toc += `\n`;

  //Description.
  var description = `## Description\n\n${requiredData.description}\n\n`;

  //Installation.
  var install = optionsArr.includes("Installation") ? `## Installation\n\n${optionalData.installation}\n\n` : "";

  //Usage.
  var usage = optionsArr.includes("Usage") ? `## Usage\n\n${optionalData.usage}\n\n` : "";

  //Credits.
  var credits = optionsArr.includes("Credits") ? `## Credits\n\n${optionalData.credits}\n\n` : "";

  //License.
  //TODO

  //Contributing.
  var contribute = optionsArr.includes("Contributing") ? `## Contributing\n\n${optionalData.contributing}\n\n` : "";

  //Tests.
  var tests = optionsArr.includes("Tests") ? `## Tests\n\n${optionalData.tests}\n\n` : "";

  //Questions.
  var questions = optionsArr.includes("Questions") ? `## Questions\n\n${optionalData.questions}\n\n` : "";

  return title + toc + description + install + usage + credits + contribute + tests + questions;
}

/* Helper functions */

/*Export functions */

module.exports = generate;
