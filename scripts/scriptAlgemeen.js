// Menu openen met de open button
var openButton = document.querySelector("header ul li > button");

// Bij click van button wordt de functie openMenu uitgevoerd
openButton.onclick = openMenu;

//  Class toonMenu (in/uitklap section) wordt toegevoegd aan de nav:last-of-type
function openMenu() {
  var deNav = document.querySelector("nav:last-of-type");
  deNav.classList.add("toonMenu");
}

// Menu sluiten met de sluit button 
var sluitButton = document.querySelector("nav:last-of-type button");

// Bij click van button wordt de functie sluitMenu uitgevoerd
sluitButton.onclick = sluitMenu;

//  Class toonMenu (in/uitklap section) wordt verwijdert van de nav:last-of-type
function sluitMenu() {
  var deNav = document.querySelector("nav:last-of-type");
  deNav.classList.remove("toonMenu");
}