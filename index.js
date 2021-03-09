const { COMPLETIONSTATEMENT_TYPES } = require('@babel/types');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const questions = ["What is the team manager's name?", "What is his/her employee ID?", "What is his/her email address?", "Please select an employee to add:"]
const newEmployeeQuestions = ["What is his/her name?", "What is his/her employee ID?", "What is his/her email address?"]

function init(){
    new Promise((resolve, reject) => {
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
            const newManagerInfo = new Manager(data.enteredName, data.ID, data.emailAddress);
            resolve();
    })
});

const newEmployeeAdd = () =>
    new Promise((resolve, reject) => {
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
                resolve(data.newEmployee);
            } else if (data.newEmployee === "Intern"){
                console.log("Add Intern");
                resolve(data.newEmployee);
            } else {
                return "Team finished";
            }
        })
});

const employeeQuestions = (position) => {
    new Promise(() => {
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
                newEngineer.getGitHub();
                const message = `Engineer is added to team`;
                return Promise.resolve(message);
            } else if (position === "Intern"){
                const newIntern  = new Intern(data.enteredName, data.ID, data.emailAddress);
                newIntern.getSchool();
                const message = `Intern is added to team`;
                return Promise.resolve(message);
            }
        })

      
});

init()
    .then(newEmployeeAdd)
    .then(employeeQuestions)
    .then(newEmployeeAdd);