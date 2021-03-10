const { COMPLETIONSTATEMENT_TYPES } = require('@babel/types');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const questions = ["What is the team manager's name?", "What is his/her employee ID?", "What is his/her email address?", "What is his/her room number?", "Please select an employee to add:"]
const newEmployeeQuestions = ["What is his/her name?", "What is his/her employee ID?", "What is his/her email address?", "What is his/her github username?", "What school do you attend?"]
let teamMembers = [];

function init() {
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
            {
                type: 'input',
                message: questions[3],
                name: 'roomNumber',
            },
        ])
        .then((data) => {
            const newManagerInfo = new Manager(data.enteredName, data.ID, data.emailAddress, data.roomNumber);
            teamMembers.push(newManagerInfo);
            newEmployeeAdd();
        })
}

function newEmployeeAdd() {
    inquirer
        .prompt([
            {
                type: 'list',
                choices: ["Engineer", "Intern", "Build Team"],
                message: questions[4],
                name: 'newEmployee',
            },
        ])
        .then((data) => {
            if (data.newEmployee === "Engineer") {
                console.log("Add Engineer");
                engineerQuestions();
            } else if (data.newEmployee === "Intern") {
                console.log("Add Intern");
                internQuestions(data.newEmployee);
            } else {
                return "Team finished";
                // build
            }
        })
    // .then(employeeQuestions)
}

function engineerQuestions() {
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
            {
                type: 'input',
                message: newEmployeeQuestions[3],
                name: 'gitHubUserName',
            },
        ])
        .then((data) => {
            console.log("created new engineer")
            const newEngineer = new Engineer(data.enteredName, data.ID, data.emailAddress, data.gitHubUserName);
            teamMembers.push(newEngineer);
            newEmployeeAdd();
        })

}

function internQuestions() {
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
            {
                type: 'input',
                message: newEmployeeQuestions[4],
                name: 'schoolName',
            },
        ])
        .then((data) => {
            console.log("created new intern")
            const newIntern = new Intern(data.enteredName, data.ID, data.emailAddress, data.schoolName);
            teamMembers.push(newIntern);
            newEmployeeAdd();
        })

}

init();