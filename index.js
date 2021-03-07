const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const questions = ["What is the team manager's name?", "What is his/her employee ID?", "What is his/her email address?"]


function init(){
inquirer
  .prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'teamManagerName',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'teamManagerID',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'teamManagerEmailAddress',
    },
  ])

  .then((data) =>{

    const newEmployee = new Employee(data.teamManagerName, data.teamManagerID, data.teamManagerEmailAddress);
    newEmployee.printInfo();

  })

}

init();