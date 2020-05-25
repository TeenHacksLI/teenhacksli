const buildAlumniCard = alumni => {

  // find the body element so that the newly created eoements
  // can be appended to it
  const body = document.querySelector(".alumniData");

  body.innerHTML += '<li class=\"d-inline-block col-md-2 text-center mb-3\"> <a data-toggle=\"modal\" data-target=\"#'.concat(alumni.FirstName,'\"> <img src=\"img/alumni/',alumni.FirstName,'_',alumni.LastName,'.png\" class=\"w-100 h-100\" alt=\"',alumni.FirstName,'\"> <h5 class=\"mt-2 mb-0\">',alumni.FirstName,' ',alumni.LastName,'</h5> <p class=\"my-0\">',alumni.Undergraduate,', \'',alumni.Year-2000,'</p> <p class=\"my-0\">',alumni.HighSchool,'</p> </a> <div class=\"modal fade\" id=\"',alumni.FirstName,'\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"',alumni.FirstName,'Model\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-body p-0\"> <div class=\"card m-0\"> <div class=\"row no-gutters\"> <div class=\"col-md-12\"> <div class=\"card-body\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">×</span> </button> <h5 class=\"card-title mb-1\">',alumni.FirstName,' ',alumni.LastName,'</h5> <p class=\"uni mb-0\">',alumni.Undergraduate,', Class of ',alumni.Year,'</p> <p class=\"affiliation text-muted my-0\">Attended: Fall 2018, Spring 2019</p> <p class=\"card-text bio mt-2\">',alumni.Bio,'</p> </div> <div class=\"card-header\"> <a href=\"mailto:',alumni.email,'\"><i class=\"fas fa-envelope fa-lg mr-3\"></i></a> <a href=\"tel:',alumni.Phone,'\"><i class=\"fas fa-phone fa-lg mr-3\"></i></a> <a href=\"',alumni.LinkedIn,'\" target=\"_blank\"><i class=\"fab fa-linkedin fa-lg mr-3\"></i></a> </div> </div> </div> </div> </div> </div> </div> </div> </li>');
}

// Create the HTML elements needed for a card

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1VFZeNSSHlzccWxI_2fsWrHw-hIF11HF9hZ7BazGHJ8s/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {

  data.forEach(alumnus => buildAlumniCard(alumnus));
}

window.addEventListener('DOMContentLoaded', init)


// SEARCH FUNCTION ------------------------------------------------------
function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('alumniSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("alumniUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelector(".card-title");
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
