const fs = require('fs');
let cards=[];
let card=[];

// create number of cards template per the number of team members.
function createCards(teamMembers){
    for (let i = 0; i < teamMembers.length; i++){
        if(teamMembers[i].getRole() === "Manager"){
            card[i] =
        `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMembers[i].getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>      
                    <li class="list-group-item">Room Number: ${teamMembers[i].roomNumber}</li>
                </ul>
            </div>
        </div>`} 
        else if(teamMembers[i].getRole() === "Engineer"){
            card[i] = 
        `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMembers[i].getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>      
                    <li class="list-group-item">GitHub User Name: <a href="https://github.com/${teamMembers[i].gitHubUserName}" target="_blank">${teamMembers[i].gitHubUserName}</a></li>
                </ul>
            </div>
        </div>`} 
        else if(teamMembers[i].getRole() === "Intern"){
            card[i] = 
        `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMembers[i].getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></li>      
                    <li class="list-group-item">School: ${teamMembers[i].school}</li>
                </ul>
            </div>
        </div>`
    }
    cards.push(card[i]);
    }
console.log("cards is " + cards);
}

// create beginning HTML File
function createBeginningHTML(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    <div class="row">`
}

// create cardsHtml
function cardHTML(){
    for(let i = 0; i < card.length; i++){
        appendToFile("./dist/index.html", card[i].toString());
    }
}

function appendToFile(fileName, data){
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
}

function createEndHtml (){
    appendToFile("./dist/index.html",                 
    `
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
    </html>`);
}
 
  module.exports = {createCards, createBeginningHTML, cardHTML, createEndHtml};
  