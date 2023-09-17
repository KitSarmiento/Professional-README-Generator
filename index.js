const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

// Function to generate the table of contents
function generateTableOfContents() {
  return `
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  `;
}

// Arrays of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter your project title:",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache-2.0", "GNU GPL v3", "Other"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing README.md:", err);
    } else {
      console.log("README.md has been successfully created!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const tableOfContents = generateTableOfContents();
    const readmeContent = generateMarkdown(answers, tableOfContents);
    writeToFile("(Generated)README.md", readmeContent);
  });
}

// Function call to initialize app
init();
