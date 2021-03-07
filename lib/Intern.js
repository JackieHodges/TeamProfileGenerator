const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email){
        super(name, id, email);

        const role = "Intern";
        this.role = role;

        let school;
    }

    getSchool(){
        inquirer
        .prompt([
            {
                type: 'input',
                message: "What school are you attending?",
                name: 'enteredSchool',
            },
            ])
        .then((enteredSchool) => {
            this.school = enteredSchool;
            console.log(this.school);
        })
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
