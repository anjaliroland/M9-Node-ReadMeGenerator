// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
`# ${data.title}

## Description
${data.description}

## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
        - [Screenshot](#screenshot)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

### Screenshot(s)
${data.screenshot}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

Feel free to check out my GitHub profile or email with any additional questions with the links below.

GitHub: ${data.github}
Email: ${data.email}
`;


module.exports = generateMarkdown;



