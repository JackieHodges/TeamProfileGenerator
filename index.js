const { COMPLETIONSTATEMENT_TYPES } = require('@babel/types');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const questions = ["What is the team manager's name?", "What is his/her employee ID?", "What is his/her email address?", "Please select an employee to add:"]
const newEmployeeQuestions = ["What is his/her name?", "What is his/her employee ID?", "What is his/her email address?"]

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

    const newManager = new Manager(data.enteredName, data.ID, data.emailAddress);
    newEmployeeAdd();

  })

}

function newEmployeeAdd(){
    inquirer
        .prompt([
            {
                type: 'list',
                choices: ["Engineer", "Intern", "N/A"],
                message: questions[3],
                name: 'newEmployee',
            },
        ])
        .then((data) => {
            if (data.newEmployee === "Engineer"){
                console.log("Add Engineer");
                employeeQuestions(data.newEmployee);
            } else if (data.newEmployee === "Intern"){
                console.log("Add Intern");
                employeeQuestions(data.newEmployee);
            } else {
                return "Team finished";
            }
        })
}

function employeeQuestions(position){
    inquirer
        .prompt([
            {
                type: 'input',
                message: newEmployeeQuestions[0],
                name: 'enteredName',
            },
            {
                type: 'input',
                message: newEmployeeQuestions[1],
                name: 'ID',
            },
            {
                type: 'input',
                message: newEmployeeQuestions[2],
                name: 'emailAddress',
            },
        ])
        .then((data) => {
            if(position === "Engineer"){
                const newEngineer = new Engineer(data.enteredName, data.ID, data.emailAddress);
                newEmployeeAdd();
            } else if (position === "Intern"){
                console.log("create new intern");
                newEmployeeAdd();
            }
        })
}

init();