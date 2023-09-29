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
var container = document.querySelector('.textcontainer');
var buttonText = document.querySelector('.textcontainer button');

function toggleText() {
   

    if (container.classList.contains("max")) {
      container.classList.remove("max");
      buttonText.textContent = 'More';
    } else {
      container.classList.add("max");
      buttonText.textContent = 'Less';
    }
  
    // if (container.style.maxHeight) {
    //   container.style.maxHeight = null;
    //   buttonText.textContent = 'more';
    // } else {
    //   container.style.maxHeight = container.scrollHeight + 'em';
    //   buttonText.textContent = 'Less';
    // }
  }
  
  buttonText.onclick = toggleText;