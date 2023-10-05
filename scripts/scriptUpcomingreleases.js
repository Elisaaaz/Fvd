// Toggle button
var container = document.querySelector('.infocontainer section:first-of-type');
var buttonText = document.querySelector('.infocontainer section:first-of-type button');

// De class max van het container-element wordt verwijderd, de inhoud van het element is kleiner en de button text is more
// Als de class geen max heeft wordt dit toegevoegd, de inhoud van het element is groter en de button text is less
function toggleText() {
  if (container.classList.contains("max")) {
    container.classList.remove("max");
    buttonText.textContent = 'More';
  } else {
    container.classList.add("max");
    buttonText.textContent = 'Less';
  }
}
// Bij click van button wordt de functie toggleText uitgevoerd
buttonText.onclick = toggleText;



/* Bron: zie bronnenlijst in Readme nummer 10 */
// Animatie afspelen en pauzeren
document.querySelector('main button:nth-child(2)').addEventListener('click', function () {
  var animationElements = document.querySelectorAll('.animation');
  var toggleIcon = document.querySelector('main button:nth-child(2) img');

  animationElements.forEach(function (element) {
    var currentState = window.getComputedStyle(element).getPropertyValue('animation-play-state');
    // Controleert de waarde & style in .animation (of het element op dat moment afspeelt of pauzeert)
    // Currentstate = de huidige animatie status van het element

    // Als de huidige status van de animatie running is wordt de animatie gepauzeerd, de img en alt verandert dan ook
    // Wanneer de currentstate niet gelijk is aan running wordt de animatie weer afgespeeld 
    if (currentState === 'running') {
      element.style.animationPlayState = 'paused';
      toggleIcon.src = 'images/play_circle_FILL0_wght400_GRAD0_opsz24.png';
      toggleIcon.alt = 'Play animation';
    } else {
      element.style.animationPlayState = 'running';
      toggleIcon.src = 'images/stop_circle_FILL0_wght400_GRAD0_opsz24.png';
      toggleIcon.alt = 'Pause animation';
    }
  });
});