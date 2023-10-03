// animatie afspelen en pauzeren
document.querySelector('main button:first-of-type').addEventListener('click', function () {
  var animationElements = document.querySelectorAll('.animation');
  var toggleIcon = document.querySelector('main button:first-of-type img');

  animationElements.forEach(function (element) {
    var currentState = window.getComputedStyle(element).getPropertyValue('animation-play-state');

    if (currentState === 'running') {
      element.style.animationPlayState = 'paused';
      toggleIcon.src = 'images/play_circle_FILL0_wght400_GRAD0_opsz24.png'; // Verander het pictogram naar play
      toggleIcon.alt = 'Play animation';
    } else {
      element.style.animationPlayState = 'running';
      toggleIcon.src = 'images/stop_circle_FILL0_wght400_GRAD0_opsz24.png'; // Verander het pictogram naar pause
      toggleIcon.alt = 'Pause animation';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const darklighttoggle = document.querySelector('header>nav ul:first-of-type button');
  darklighttoggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
          document.documentElement.style.setProperty('--color-text', 'white');
          document.documentElement.style.setProperty('--color-background', '#191919');
          document.documentElement.style.setProperty('--color-button', '#00ff0f');
          document.documentElement.style.setProperty('--color-border', 'white');
          // darklighttoggle.src = 'images/dark_mode_FILL0_wght400_GRAD0_opsz24.png';
          // darklighttoggle.alt = 'dark-mode'
      } else {
          document.documentElement.style.setProperty('--color-text', 'black');
          document.documentElement.style.setProperty('--color-background', 'white');
          document.documentElement.style.setProperty('--color-button', '#00ff0f');
          document.documentElement.style.setProperty('--color-border', 'black');
          // darklighttoggle.src = 'images/light_mode_FILL0_wght400_GRAD0_opsz24.png';
          // darklighttoggle.alt = 'light-mode'
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contrasttoggle = document.querySelector('header>nav:first-of-type ul li:last-child button');
  contrasttoggle.addEventListener('click', function() {
      document.body.classList.toggle('highcontrast-mode');

      if (document.body.classList.contains('highcontrast-mode')) {
          document.documentElement.style.setProperty('--color-text', 'white');
          document.documentElement.style.setProperty('--color-background', 'black');
          document.documentElement.style.setProperty('--color-button', '#00ff0f');
          document.documentElement.style.setProperty('--color-border', 'white');
      } else {
          document.documentElement.style.setProperty('--color-text', 'black');
          document.documentElement.style.setProperty('--color-background', 'white');
          document.documentElement.style.setProperty('--color-button', '#00ff0f');
          document.documentElement.style.setProperty('--color-border', 'black');
      }
  });
});






