//Read Me template

function generateMarkdown(input) {
  return`
  <h1 align="center">${input.title}</h1>

  ![badge](https://img.shields.io/badge/license-${input.license}-blue)<br>

  ## Description
  ${input.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${input.installation}

  ## Usage
  ${input.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${input.license}-blue)<br>
 This application uses the ${input.license} license.

## Contributing
${input.contributing}

## Tests
${input.tests}

## Questions

GitHub: [${input.username}](https://github.com/${input.username})<br>
<br>
Email: ${input.email}<br>
`;

}

module.exports = generateMarkdown;
