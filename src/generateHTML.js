let cards=[];
let card=[];

// create number of cards template per the number of team members.
function createHTML(teamMembers){
    for (let i = 0; i < teamMembers.length; i++){
        if(teamMembers[i].getRole() === "Manager"){
            card[i] =
        `<div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMembers[i].getID()}</li>
                    <li class="list-group-item">Email: ${teamMembers[i].getEmail()}</li>      
                    <li class="list-group-item">Room Number: ${teamMembers[i].roomNumber}</li>
                </ul>
            </div>
        </div>`} 
        else if(teamMembers[i].getRole() === "Engineer"){
            card[i] = 
        `<div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMembers[i].getID()}</li>
                    <li class="list-group-item">Email: ${teamMembers[i].getEmail()}</li>
                    <li class="list-group-item">GitHub User Name: ${teamMembers[i].gitHubUserName}</li>
                </ul>
            </div>
        </div>`
    } else {
        card[i] = 
        `<div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${teamMembers[i].getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMembers[i].getID()}</li>
                    <li class="list-group-item">Email: ${teamMembers[i].getEmail()}</li>
                    <li class="list-group-item">School: ${teamMembers[i].school}</li>
                </ul>
            </div>
        </div>`
    }
    cards.push(card[i]);
    }
console.log("cards is " + cards);
}


// function to generate markdown for README
function generateHTML() {
    if (cards.length <=3){
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
        <div class="row">
            ${cards[0]}
            ${cards[1]}
            ${cards[2]}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        </body>
        </html>`
    }
    else if (cards.length <= 6){
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
        <div class="row">
            ${cards[0]}
            ${cards[1]}
            ${cards[2]}
        </div>
        <div class="row">
            ${cards[3]}
            ${cards[4]}
            ${cards[5]}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        </body>
        </html>`
    } 
    else {
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
        <div class="row">
            ${cards[0]}
            ${cards[1]}
            ${cards[2]}
        </div>
        <div class="row">
            ${cards[3]}
            ${cards[4]}
            ${cards[5]}
        </div>
        <div class="row">
            ${cards[6]}
            ${cards[7]}
            ${cards[8]}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        </body>
        </html>`
    }
  }
  
  module.exports = {createHTML, generateHTML};
  