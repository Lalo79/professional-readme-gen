// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  license = license.replace(/ /g, "_");

  if (license != 'None') {
  return licenseBadge = `![License Badge](https://img.shields.io/badge/License-${license}-blue)`;
  } else {
    return ``;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  license == 'None'? selectedLicense = `` 
    : license == 'Apache 2.0' ? selectedLicense = `https://choosealicense.com/licenses/apache-2.0/`
    : license == 'General Public License v3.0' ? selectedLicense = `https://choosealicense.com/licenses/gpl-3.0/`
    : license == 'MIT' ? selectedLicense = `https://choosealicense.com/licenses/mit/`
    : selectedLicense = `https://choosealicense.com/licenses/isc/`

  return selectedLicense;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseLink = renderLicenseLink(license);

  if (license != 'None') {
    return `
## License  

The content of this site is subject to the terms and conditions of ${license.license} license.  
For detailed Information, click on the following Link  
${licenseLink}
`
    
  } else {
    return ``
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.licenseBadge = renderLicenseBadge(data.license);
  let licenseText = renderLicenseSection(data.license);

  let sectionsList = ``;
  sectionsContent = ``;

  if (data.sections.length != 0 ) {
    
    // forEach populates the sections that user selected in the Table of Contents
    data.sections.forEach(element => {
      compundElement = element.replace(/ /g,"-").toLowerCase(),
  // ---------------------------------------
      sectionsList += 
`- [${element}](#${compundElement})  
`
  // ---------------------------------------
    });

    if(licenseText != ``) {
      sectionsList += 
`- [License](#license)  
`   }

sectionsList += 
`- [Questions](#questions)  
`

    // forEach Creates the sections that user selected and includes the text of each section
    const sectionsArray = data.sections;
    
    sectionsArray.forEach(element => {
      
// ---------------------------------------- 
      sectionsContent += 
`## ${element}  
    
  ${data[element]}

`
//------------------------------------------
    });
  }
  

  return `
# ${data.title}  

${data.licenseBadge}


## Table of Contents
- [Description](#description)
${sectionsList}  


## Description  

${data.description}  


${sectionsContent}  

${licenseText}  


## Questions
Please refer to my GitHub profile for more information: https://github.com/${data.github}  
If you have questions, you can reach me via e-mail: ${data.mail}   

`;

}

module.exports = {generateMarkdown, renderLicenseLink, renderLicenseBadge}
