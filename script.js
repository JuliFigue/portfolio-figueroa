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
document.addEventListener('DOMContentLoaded', function() {

    var modal = document.getElementById('imageModal');
    if (!modal) return; 
    
    var modalImg = document.getElementById('modalImage'); 

    var galleryImages = document.querySelectorAll('.afiches-grid img, .fotos-grid img');

    galleryImages.forEach(function(img) {
        img.classList.add('galeria-img-preview'); 
        
        img.onclick = function() {
            var fullSrc = this.getAttribute('src');
            modal.classList.add('show');
            modalImg.src = fullSrc;
        }
    });
    
    modal.onclick = function(event) {
       
        if (event.target === event.currentTarget || event.target.classList.contains('modal-content-wrapper')) { 
            modal.classList.remove('show');
        }
    }
});