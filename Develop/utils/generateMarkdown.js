// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges = {
        MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        ISC: 'https://img.shields.io/badge/License-ISC-blue.svg',
        apache: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        None: ''
    }
    return badges[license];
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const links = {
        MIT: 'https://opensource.org/licenses/MIT',
        ISC: 'https://opensource.org/licenses/ISC',
        apache: 'https://opensource.org/licenses/Apache-2.0',
        none: ''
    }
    return links[license];
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license); 
};

// Function to generate markdown for README
const generateMarkdown = (data) => 
`
# ${data.title}  

![badge](${renderLicenseBadge(data.license)})

## Description  

${data.description}  
___________________

## Table of Contents  

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
___________________

## Installation  

${data.installation}  
___________________

## Usage  

${data.usage}  
___________________

## License  

This project is licensed under: ![license](${renderLicenseSection(data.license)})
 
___________________

## Contributing  

${data.contributing}  
___________________

## Tests  

${data.tests}  
___________________

## Questions  

Feel free to check out my GitHub profile or email me if you have any questions with the links below.  

**GitHub:**  ${data.github}  
**Email:**  ${data.email}  
`;


module.exports = generateMarkdown;