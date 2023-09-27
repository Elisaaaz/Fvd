// menu openen met de open button
var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

// menu sluiten met de sluit button 
var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}


// toggle button
function toggleText() {
    var container = document.querySelector('.textcontainer');
    var buttonText = document.querySelector('.textcontainer button');
  
    if (container.style.maxHeight) {
      container.style.maxHeight = null;
      buttonText.textContent = 'more';
    } else {
      container.style.maxHeight = container.scrollHeight + 'em';
      buttonText.textContent = 'Less';
    }
  }
  
