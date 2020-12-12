const inquirer = require('inquirer');
const fs = require('fs');

// prompts
const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license?',
      choices: ['© 2020', 'None'],
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test instructions?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address?',
    },
  ])
    .then((answers) => {
      console.log(JSON.stringify(answers, null, '  '));
      return answers;
    });

const init = async () => {
  answers = await questions();
   var markdown = `# ${answers.title}
    
## Description
${answers.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Questions?](#Questions?)

## Installation
${answers.install}

## Usage
${answers.usage}

## License
${answers.license}

## Contributions
${answers.contributions}

## Tests
${answers.tests}

## Questions?
My Github: https://github.com/${answers.questions} 

My email: ${answers.email}
  
`;
  console.log(markdown);

  fs.writeFile('README.md', markdown, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('readme had been made.')
  });
}
init();