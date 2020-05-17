const buildTeamCard = team => {


  // find the body element so that the newly created eoements
  // can be appended to it
  const body = document.querySelector("."+team.com);

  body.innerHTML += "<div class=\"col-md-6\"><div class=\"row mb-3\"><div class=\"col-4\"><img src=\"img/team/".concat(team.FirstName,"_",team.LastName,".png\"></div><div class=\"col-8\"><h3>",team.FirstName," ",team.LastName,"<br><em><small>",team.title,"</small></em></h3><h5>",team.school,"</h5><a href=\"mailto:",team.email,"\"><i class=\"fas fa-envelope fa-2x mr-2\"></i></a><a href=\"",team.linkedin,"\" target=\"_blank\"><i class=\"fab fa-linkedin fa-2x\"></i></a></div></div></div>");

}

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1BZXDM-Ipc3fQhBQgTtS5i8maMHgLPoQ8rQoD-jDEoAk/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {

  data.forEach(team => buildTeamCard(team));
}

window.addEventListener('DOMContentLoaded', init)
