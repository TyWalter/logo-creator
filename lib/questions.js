// Requiring inquirer and maxlength and telling inquirer it can use max length
const inquirer = require("inquirer");
const maxLength = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt('maxlength-input', maxLength);

// Questions for the inquirer command line prompts
const questions = (callback) => inquirer.prompt([
  {
    type: "maxlength-input",
    message: "Enter up to 3 characters for your logo:",
    name: "txt",
    maxLength: 3
  },
  {
    type: "input",
    message: "Enter a color or a hexadecimal number for your text color:",
    name: "txtColor"
  },
  {
    type: "list",
    message: "Choose a shape for your logo:",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"]
  },
  {
    type: "input",
    message: "Enter a color or a hexadecimal number for your shape color:",
    name: "shapeColor"
  }
]).then((resp) => {
  callback(resp);
});

// Exporting questions
module.exports = {
  questions
}