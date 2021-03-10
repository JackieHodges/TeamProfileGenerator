const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
    }

    getSchool(){
        return this.school;
        // inquirer
        // .prompt([
        //     {
        //         type: 'input',
        //         message: "What school are you attending?",
        //         name: 'enteredSchool',
        //     },
        //     ])
        // .then((enteredSchool) => {
        //     this.school = enteredSchool;
        //     console.log(this.school);
        // })
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
