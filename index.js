const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    }, {
        type: "input",
        name: "description",
        message: "Describe your project.",
    }, {
        type: "input",
        name: "installation",
        message: "How do you install this application?",
    }, {
        type: "input",
        name: "usage",
        message: "How do you use this application?",
    }, {
        type: "input",
        name: "credits",
        message: "List your collaborators (if any) with links to their git hub profiles.",

    }, {
        type: "input",
        name: "repo",
        message: "Add the link to your repo.",

    }, {
        type: "input",
        name: "deployed",
        message: "Add the link to your deployed project.",

    }, {
        type: "input",
        name: "screen",
        message: "Add the link to your screen shot. ",

    }, {
        type: "list",
        name: "license",
        message: "What license is the application covered under?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]

    }])
    .then(answers => {
        const fileName = `${answers.title}.md`;
        const { title, description, installation, usage, credits, repo, deployed, screen, license } = answers;
      
        function badges(license){
            //if statement for the license
            if (license !== "None"){
                return '![License](https://img.shields.io/badge/license-' + license + '-yellow.svg)'
            }
            return ''
        }
//if the user chooses "Public Domain"
//print [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
//at the top of the README

//if the user chooses "Permissive"
//print [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//at the top of the README

//if the user chooses "LGPL"
//print [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
//at the top of the README

        var write = `## ${title}

${badges(license)}

## Description

${description}


## Installation

${installation}


## Usage

${usage}


## Credits

${credits}


## Repository

http://github.com - automatic!
[GitHub](${repo})


## Deployed Project

http://github.com - automatic!
[GitHub](${deployed})


## Screen Shot

![GitHub Logo](./${screen})
Format: ![screen shot of executed project](url)

## License

${license}`

        fs.writeFile(fileName, write, (err) =>
            err ? console.error(err) : console.log('Success'));
    })




