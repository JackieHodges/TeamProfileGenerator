# TeamProfileGenerator
Object-Oriented Programming: Team Profile Generator


## Description

This application is a Node.js command-line application that takes in user input to then dynamically generate an HTML webpage that displays employees on a software engineering team. 

When the application is intiated, the user is prompted using the [Inquirer package](https://www.npmjs.com/package/inquirer) to enter the team manager’s name, employee ID, email address, and office number. Once completed, the user is prompted to either add a new Engineer, add a new Intern, or Build the Team.

If adding a new Engineer is selected, the user is then prompted to enter the engineer’s name, ID, email, and GitHub username. After each additional employee, the user is prompted if they would like to add a new Engineer, add a new Intern, or Build the Team. If adding a new Intern is selected, the user is then prompted to enter the intern’s name, ID, email, and school.

Once Build the Team is selected, the HTML is generated into the index.html file. This HTML can then be opened in a browser. On this webpage, all the entered data for the Manager and applicable engineers and/or interns is listed. All email addresses are links to open and populate the TO field of the email with that address. The GitHub user name is also a link to the user's profile.

Unit tests can be ran with [Jest](https://www.npmjs.com/package/jest). While more validation can be added to ensure that user input is in the proper format, the testing included are written to ensure teh constructors and functions within are working correctly.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)


## Installation

To install, follow these steps:

* Pull the repository found here: [Team Profile Generator Repo](https://github.com/JackieHodges/TeamProfileGenerator)
* Install dependencies by typing the following in the terminal: npm i
* Once the dependence has been installed, run the application by entering: node index.js  


## Usage

Below is a video of the typical user flow through of the application:

![video](gif/READMEgif.gif)


## Credits

The [Inquirer package](https://www.npmjs.com/package/inquirer) and [Jest](https://www.npmjs.com/package/jest) were used in this project. 
