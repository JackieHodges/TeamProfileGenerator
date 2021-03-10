const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName){
        super(name, id, email);
       
        this.gitHubUserName = gitHubUserName;
    }

    getGitHub(){
        return this.gitHubUserName;
        // inquirer
        // .prompt([
        //     {
        //         type: 'input',
        //         message: "What is your github username?",
        //         name: 'enteredName',
        //     },
        //     ])
        // .then((enteredName) => {
        //     let gitHubUserName = enteredName;
        //     console.log(gitHubUserName);
        // })
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
