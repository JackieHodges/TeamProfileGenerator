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
function generateHTML(teamMembers) {
    return `HTML GOES HERE`;
  }
  
  module.exports = {createHTML, generateHTML};
  