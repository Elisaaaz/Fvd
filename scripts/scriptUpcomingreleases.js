// toggle button
var container = document.querySelector('.infocontainer section:first-of-type');
var buttonText = document.querySelector('.infocontainer section:first-of-type button');

function toggleText() {


  if (container.classList.contains("max")) {
    container.classList.remove("max");
    buttonText.textContent = 'More';
  } else {
    container.classList.add("max");
    buttonText.textContent = 'Less';
  }
}

buttonText.onclick = toggleText;

// animatie afspelen en pauzeren
document.querySelector('main button:nth-child(2)').addEventListener('click', function () {
  var animationElements = document.querySelectorAll('.animation');
  var toggleIcon = document.querySelector('main button:nth-child(2) img');

  animationElements.forEach(function (element) {
    var currentState = window.getComputedStyle(element).getPropertyValue('animation-play-state');

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