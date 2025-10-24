document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtiene referencias al audio y al botón
    const audioElement = document.getElementById('musicaFondo');
    const playButton = document.getElementById('btnMusica');
    let isPlaying = false; // Estado inicial: pausado

    // 2. Función para alternar entre play y pause
    function togglePlay() {
        if (isPlaying) {
            audioElement.pause();
            playButton.innerHTML = '▶ Poné play!'; // Símbolo de Play
            playButton.classList.remove('is-playing'); // Quita la clase de estilo activo
        } else {
            // Intenta reproducir el audio. Usa .catch para manejar navegadores que bloquean el auto-play
            audioElement.play().then(() => {
                playButton.innerHTML = '⏸ Pausar!'; // Símbolo de Pause
                playButton.classList.add('is-playing'); // Agrega la clase de estilo activo
                isPlaying = true;
            }).catch(error => {
                console.error("Error al reproducir el audio:", error);
                alert("El navegador bloqueó la reproducción automática. Haz clic de nuevo.");
            });
        }
        isPlaying = !isPlaying;
    }

    // 3. Agrega el evento de clic al botón
    playButton.addEventListener('click', togglePlay);

    // Opcional: Si la música termina, actualiza el botón
    audioElement.addEventListener('ended', () => {
        isPlaying = false;
        playButton.innerHTML = '▶ Poné play!';
        playButton.classList.remove('is-playing');
    });
});