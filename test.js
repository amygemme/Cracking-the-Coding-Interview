const inquirer = require('inquirer');

inquirer
  .prompt([
    {type: "input", message: "enter first string", name: "string1"},
    {type: "input", message: "enter second string", name: "string2"}
  ])
  .then(answers => {
    console.log(answers) 
 });

  