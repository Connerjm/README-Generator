/* Main function */

// Takes the object from inquirer and parses it into a big string.
function generate(requiredData, optionalData)
{
  //Array of the selected optional sections.
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

  //Description.
  var description = `\n## Description\n\n${requiredData.description}\n`;

  //Features.
  var features = optionsArr.includes("Features") ? `\n## Features\n\n${optionalData.features}\n` : "";

  //Installation.
  var install = optionsArr.includes("Installation") ? `\n## Installation\n\n${optionalData.installation}\n` : "";

  //Technologies.
  var technologies = optionsArr.includes("Technologies") ? processTech(optionalData.technologies) : "";

  //Usage.
  var usage = optionsArr.includes("Usage") ? `\n## Usage\n\n${optionalData.usage}\n` : "";

  //Credits.
  var credits = optionsArr.includes("Credits") ? processCredits(optionalData.credits) : "";

  //Contributing.
  var contribute = optionsArr.includes("Contributing") ? `\n## Contributing\n\n${optionalData.contributing}\n` : "";

  //Tests.
  var tests = optionsArr.includes("Tests") ? `\n## Tests\n\n${optionalData.tests}\n` : "";

  //Questions.
  var questions = optionsArr.includes("Questions") ? `\n## Questions\n\n${optionalData.questions}\n` : "";

  //License.
  var license = optionsArr.includes("License") ? processLicense(requiredData.title, optionalData.license) : "";

  //Combine the elements and return it.
  return `${title}${toc}${description}${features}${install}${technologies}${usage}${credits}${contribute}${tests}${questions}${license}`;
}

/* Helper functions */

//Builds the string for the list of technologies used.
function processTech(technologies)
{
  var string = `\n## Technologies\n\n`;
  for (let i = 0; i < technologies.length; i++)
    string += `- ${technologies[i]}\n`;
  return string;
}

//Builds the string of user names which are turned into links.
function processCredits (users)
{
  var usersArr = users.split(" ");
  var linksArr = usersArr.map(user => `[${user}](https://github.com/${user})`);
  return `\n## Credits\n\n${linksArr.join(", ")}\n`;
}

//Builds the string for the license related information.
function processLicense (title, license)
{
  var badge = `[![${license} License](https://img.shields.io/badge/License-${license}-blue)](https://www.opensource.org/licenses/${license})`;
  var string = `${title} is released under the [${license} License](https://www.opensource.org/licenses/${license}).`;
  return `\n## License\n\n${badge} ${string}\n`;
}

/*Export functions */

module.exports = generate;
