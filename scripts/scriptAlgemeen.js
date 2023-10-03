// menu openen met de open button
var openButton = document.querySelector("header ul li > button");

openButton.onclick = openMenu;

function openMenu() {
  var deNav = document.querySelector("nav:last-of-type");
  deNav.classList.add("toonMenu");
}

// menu sluiten met de sluit button 
var sluitButton = document.querySelector("nav:last-of-type button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav:last-of-type");
  deNav.classList.remove("toonMenu");
}