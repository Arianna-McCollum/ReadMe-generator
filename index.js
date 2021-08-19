const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

function userInput(){
    return inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project? ",
    },
    {
        type: "input",
        name: "description",
        message: "Write your description of the project: "
    },
    {
        type: "input",
        name: "installation",
        message: "What is the Installation process? ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage? ",
    },
    {
       type: "list",
       name: "license",
       message: "Choose your license: ",
       choices: [
           "Apache",
           "MIT",
           "Open",
           "GNU",
           "Mozilla",
       ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed?"
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any tests included?",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    } 
    ]);
}

async function init(){
    try {
        const input = await userInput();
        const generateContent = generateMarkdown(input);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Check the README.md!');
    } catch(err) {
        console.log(err);
    }
}

init();