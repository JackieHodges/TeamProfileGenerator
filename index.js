const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

const questions = ["What is the team manager's name?", "What is his/her employee ID?", "What is his/her email address?"]


function init(){
inquirer
  .prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'enteredName',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'ID',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'emailAddress',
    },
  ])

  .then((data) =>{

    const newEmployee = new Manager(data.enteredName, data.ID, data.emailAddress);
    newEmployee.printInfo();

  })

}

init();