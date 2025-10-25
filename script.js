document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('musicaFondo');
    const playButton = document.getElementById('btnMusica');
    let isPlaying = false; 

    
    function togglePlay() {
        if (isPlaying) {
            audioElement.pause();
            playButton.innerHTML = '▶ Poné play!'; 
            playButton.classList.remove('is-playing'); 
        } else {
            
            audioElement.play().then(() => {
                playButton.innerHTML = '⏸ Pausar!'; 
                playButton.classList.add('is-playing'); 
                isPlaying = true;
            }).catch(error => {
                console.error("Error al reproducir el audio:", error);
                alert("El navegador bloqueó la reproducción automática. Haz clic de nuevo.");
            });
        }
        isPlaying = !isPlaying;
    }

    
    playButton.addEventListener('click', togglePlay);

    
    audioElement.addEventListener('ended', () => {
        isPlaying = false;
        playButton.innerHTML = '▶ Poné play!';
        playButton.classList.remove('is-playing');
    });
});