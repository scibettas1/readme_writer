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

            //if statements for the licenses
            if (license === "MIT") {
                var licenseCode="MIT-yellow.svg";
            } else if (license === "APACHE 2.0") {
                var licenseCode="Apache%202.0-blue.svg";
            } else if (license === "GPL 3.0") {
                var licenseCode="GPLv3-blue.svg";
            } else if (license === "BSD 3") {
                var licenseCode="BSD%203--Clause-blue.svg";
            }
            //to print the badges at the top of the page
            if (license !== "None"){
                return '![License](https://img.shields.io/badge/license-' + licenseCode + ')'
            }
            return ''
        }

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

[${title} Repo](${repo})


## Deployed Project

[${title}](${deployed})


## Screen Shot

![GitHub Logo](/${screen})


## License

${license}`

        fs.writeFile(fileName, write, (err) =>
            err ? console.error(err) : console.log('Success'));
    })




