function createHTML(teamMembers){
    for(i = 0; i < teamMembers.length; i++){
        if (teamMembers[i].getRole() === "Manager"){
            `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${teamMembers[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMembers[i].id}</li>
                    <li class="list-group-item">Email: ${teamMembers[i].email}</li>
                    <li class="list-group-item">Room Number: ${teamMembers[i].roomNumber}</li>
                </ul>
            </div>`
        } else if(teamMembers[i].getRole() === "Engineer"){
            `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${teamMembers[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">GitHub: </li>
                </ul>
            </div>`
        } else (
            `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${teamMembers[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${teamMembers[i].getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">School: </li>
                </ul>
            </div>`
        )
    }
}


// function to generate markdown for README
function generateHTML(teamMembers) {
    return `HTML GOES HERE`;
  }
  
  module.exports = {createHTML, generateHTML};
  