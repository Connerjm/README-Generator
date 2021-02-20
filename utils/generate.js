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
function generate(data)
{
  var markdown = `# ${data.title}\n\n`;
  //Table of contents.
  markdown += `## Description\n\n${data.description}`;
  //Installation.
  //Usage.
  //License.
  //Contributing.
  //Tests.
  //Questions.
  return markdown + `\n`;
}

/* Helper functions */

/*Export functions */

module.exports = generate;
