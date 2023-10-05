/* Bron: zie bronnenlijst in Readme nummer 10 */
// Animatie afspelen en pauzeren
document.querySelector('main button').addEventListener('click', function () {
    var animationElements = document.querySelectorAll('.animation');
    var toggleIcon = document.querySelector('main button img');

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