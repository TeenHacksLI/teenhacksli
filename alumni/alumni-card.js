const buildAlumniCard = alumnus => {
  const card = document.createElement("div");
  card.setAttribute("class", "card mb-3");
  const row = document.createElement("div");
  row.setAttribute("class", "row no-gutters")
  const col3 = document.createElement("div");
  col3.setAttribute("class", "col-md-3");
  const img = document.createElement("img");
  img.setAttribute("src", "img/".concat(alumnus.FirstName,"_",alumnus.LastName,".png"));
  img.setAttribute("class","card-img w-100 h-100")
  img.setAttribute("alt",alumnus.FirstName)

  const col9 = document.createElement("div");
  col9.setAttribute("class", "col-md-9");
  const cardB = document.createElement("div");
  cardB.setAttribute("class", "card-body");
  const name = document.createElement("h5");
  name.setAttribute("class", "card-title mb-0");
  const uni = document.createElement("p");
  uni.setAttribute("class", "uni mb-0");
  const affiliation = document.createElement("p");
  affiliation.setAttribute("class", "affiliation text-muted my-0");
  const bio = document.createElement("p");
  bio.setAttribute("class","card-text bio");

  const footer = document.createElement("div");
  footer.setAttribute("class", "card-header");

  const mail = document.createElement("a");
  mail.setAttribute("href", "mailto:".concat(alumnus.Email));
  const phone = document.createElement("a");
  phone.setAttribute("href","tel:".concat(alumnus.Phone));
  const linked = document.createElement("a");
  linked.setAttribute("href", alumnus.LinkedIn);
  linked.setAttribute("target","_blank");

  const maili = document.createElement("i");
  maili.setAttribute("class","fas fa-envelope fa-lg mr-3");
  const phonei = document.createElement("i");
  phonei.setAttribute("class","fas fa-phone fa-lg mr-3")
  const linkedi = document.createElement("i");
  linkedi.setAttribute("class","fab fa-linkedin fa-lg mr-3");

  // find the body element so that the newly created eoements
  // can be appended to it
  const body = document.querySelector(".alumniData");

  // Append the elements to the DOM
  body.append(card);
  card.append(row);
  row.append(col3);
  col3.append(img);
  row.append(col9);
  col9.append(cardB);
  cardB.append(name);
  cardB.append(uni);
  cardB.append(affiliation);
  cardB.append(bio);
  col9.append(footer);
  footer.append(mail);
  mail.append(maili);
  footer.append(phone);
  phone.append(phonei);
  footer.append(linked);
  linked.append(linkedi);

  name.innerHTML = alumnus.FirstName.concat(" ", alumnus.LastName);
  uni.innerHTML = alumnus.Undergraduate.concat(", Class of ", alumnus.Year);
  affiliation.innerHTML = alumnus.Involvement.concat(", ", alumnus.Involved);
  bio.innerHTML = alumnus.Bio;
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
