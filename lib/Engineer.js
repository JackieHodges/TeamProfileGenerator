const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email){
        super(name, id, email);

        const role = "Engineer";
        this.role = role;
        
        let gitHubUserName;
        this.gitHubUserName = gitHubUserName;
    }

    getGitHub(){
        inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your github username?",
                name: 'enteredName',
            },
            ])
        .then((enteredName) => {
            let gitHubUserName = enteredName;
            console.log(gitHubUserName);
        })
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
