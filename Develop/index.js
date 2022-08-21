// TODO: Include packages needed for this application

const path = 'C:/xampp/htdocs/Bootcamp/TDM-VIRT-FSF-PT-06-2022-U-LOLC/09-NodeJS/01-Activities/18-Stu_Package-npm/Unsolved/node_modules/inquirer'

const inquirer = require(path);
const fs = require('fs');

const textGen =  require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the Title of your Project',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
      },
      {
        type: 'input',
        name: 'mail',
        message: 'Please enter your e-mail',
      },
      {
        type: 'list',
        name: 'license',
        message: 'PLease choose the License that applies to your project',
        choices: ['None','Apache 2.0', 'General Public License v3.0', 'MIT', 'ISC License'],
      },
      {
        type: 'checkbox',
        name: 'sections',
        message: 'Please indicate the sections to include in your README file?',
        choices: ['Installation', 'Usage', 'Contributing Process', 'Tests']
      },
      {
        type: 'editor',
        name: 'description',
        message: 'Please enter the description of your project'
  
      },
      /* The following Questions depends of the output of questions.sections
       If a section is selected, then the questionnaire will prompt for the description of such section
      */
      {
        type: 'editor',
        name: 'Installation',
        message: 'Please enter Installation instructions',
        when: (answers) => answers.sections.filter(param => {return param == 'Installation'}).length == 1
      },
      {
        type: 'editor',
        name: 'Usage',
        message: 'Please enter the usage Instructions for the Application',
        when: (answers) => answers.sections.filter(param => {return param == 'Usage'}).length == 1
      },
      {
        type: 'editor',
        name: 'Contributing Process',
        message: 'Please describe how to make contributions',
        when: (answers) => answers.sections.filter(param => {return param == 'Contributing Process'}).length == 1
      },
      {
        type: 'editor',
        name: 'Tests',
        message: 'Please describe the Tests used for this Application ',
        when: (answers) => answers.sections.filter(param => {return param == 'Tests'}).length == 1
      }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.MD!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {       

      // console.log('readMetext', answers)
      const readMetext = textGen.generateMarkdown(answers);
      writeToFile('README_PROF.md',readMetext)
    })
}

// Function call to initialize app
init();


