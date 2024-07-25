document.addEventListener('DOMContentLoaded', function() {
    // Chame a função animateBreathing para diferentes elementos
    animateBreathing('#NakLogo', 1, 0.6, 1, 0.01, 500);
    animateBreathing('#LovePetMainVideo', 1, 0.9, 1, 0.002, 10);
    animateBreathing('#HappyNak', 1, 0.9, 1, 0.002, 10);
    animateBreathing('#HappyNakContact', 1, 0.9, 1, 0.002, 10);
    animateBreathing('#SadNakBadContact', 1, 0.9, 1, 0.002, 10);
});

function animateBreathing(element, initialScale, minScale, maxScale, step, pauseTime) {
    var scaleValue = initialScale;
    var isIncreasing = false;

    function breath() {
        if (isIncreasing && scaleValue >= maxScale) {
            // Quando atinge o tamanho máximo, faz uma pequena pausa
            setTimeout(() => { isIncreasing = false; }, pauseTime);
        } else if (!isIncreasing && scaleValue <= minScale) {
            // Quando atinge o tamanho mínimo, inverte a direção
            isIncreasing = true;
        }

        // Atualiza a escala com base na direção
        scaleValue += isIncreasing ? step : -step;
        var transformValue = 'scaleY(' + scaleValue + ')';
        document.querySelector(element).style.transform = transformValue;

        requestAnimationFrame(breath);
    }

    breath();
}
