document.addEventListener('DOMContentLoaded', function() {
    animateBreathing('#NakLogo');
});

function animateBreathing(element) {
    var scaleValue = 1;
    var isIncreasing = false;
    var step = 0.01; // Taxa de variação da escala
    var minScale = 0.6; // Valor mínimo da escala
    var maxScale = 1;   // Valor máximo da escala
    var pauseTime = 500; // Tempo de pausa em milissegundos (0.5 segundos)

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