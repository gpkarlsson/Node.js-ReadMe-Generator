class MarkDown {

  static renderLicenseBadge(license) {
    const badges = {
      mit:  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnugplv3:  '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/licenses/lgpl-3.0)'
    }
    return badges[license]
  }

  static renderLicenseLink(license) {
    const licenseLinks = {
      mit: '[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnugplv3: '[![GNUGPLv3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/licenses/lgpl-3.0)'
    }
    return licenseLinks[license]

  }

  static renderLicenseSection(license) {
    
  }

  static generateMarkdown(data) {
    return ` 
# ${data.title}
    


## Description
${data.description}

## Table of Contents
- [Project Description](#Description)
- [Usage](#Usage)
- [Credits](#Credits)
- [Installation](#Installation)

## Usage

## Credits
${data.credits}

## Installation
${data.installation}

## Contact
${data.email}
${data.github}

## License
${this.renderLicenseLink(data.license)}
MIT License


  `;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


module.exports = MarkDown;
