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
  toc += `\n`;

  //Description.
  var description = `## Description\n\n${requiredData.description}\n\n`;

  //Installation.
  var install = optionsArr.includes("Installation") ? `## Installation\n\n${optionalData.installation}\n\n` : "";

  //Usage.
  var usage = optionsArr.includes("Usage") ? `## Usage\n\n${optionalData.usage}\n\n` : "";

  //Credits.
  var credits = optionsArr.includes("Credits") ? `## Credits\n\n${optionalData.credits}\n\n` : "";

  //Contributing.
  var contribute = optionsArr.includes("Contributing") ? `## Contributing\n\n${optionalData.contributing}\n\n` : "";

  //Tests.
  var tests = optionsArr.includes("Tests") ? `## Tests\n\n${optionalData.tests}\n\n` : "";

  //Questions.
  var questions = optionsArr.includes("Questions") ? `## Questions\n\n${optionalData.questions}\n\n` : "";

  //License.
  var license = optionsArr.includes("License") ? processLicense(requiredData.title, optionalData.license) : "";

  //Combine the elements and return it.
  return `${title}${toc}${description}${install}${usage}${credits}${contribute}${tests}${questions}${license}`;
}

/* Helper functions */

//Builds the string for the license related information.
function processLicense (title, license)
{
  var badge = `[![${license} License](https://img.shields.io/badge/License-${license}-blue)](https://www.opensource.org/licenses/${license})`;
  var string = `${title} is released under the [${license} License](https://www.opensource.org/licenses/${license}).`;
  return `## License\n\n${badge} ${string}\n`;
}

/*Export functions */

module.exports = generate;
