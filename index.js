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

    }])
    .then(answers => {
        const fileName = `${answers.title}_README.md`;
        const { title, description, credits, repo, deployed, screen } = answers;
        
        var write = `## ${title}


## Description

${description}

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
Format: ![screen shot of executed project](url)`

        fs.writeFile(fileName, write, (err) =>
            err ? console.error(err) : console.log('Success'));
    })




