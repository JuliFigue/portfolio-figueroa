document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('nav-mobile');
    
    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    const audioElement = document.getElementById('musicaFondo');
    const playButton = document.getElementById('btnMusica');
    let isPlaying = false; 

    if (playButton && audioElement) {
        function togglePlay() {
            if (isPlaying) {
                audioElement.pause();
                playButton.innerHTML = '▶ Poné play!'; 
                playButton.classList.remove('is-playing'); 
                isPlaying = false; 
            } else {

                audioElement.play().then(() => {
                    playButton.innerHTML = '⏸ Pausar!'; 
                    playButton.classList.add('is-playing'); 
                    isPlaying = true;
                }).catch(error => {
                    console.error("Error al reproducir el audio:", error);
                    alert("El navegador bloqueó la reproducción automática. Haz clic de nuevo.");
                    isPlaying = false;
                });
            }
        }

        playButton.addEventListener('click', togglePlay);

        audioElement.addEventListener('ended', () => {
            isPlaying = false;
            playButton.innerHTML = '▶ Poné play!';
            playButton.classList.remove('is-playing');
        });
    }


    var modal = document.getElementById('imageModal');
    

    if (modal) { 
        var modalImg = document.getElementById('modalImage'); 
        var galleryImages = document.querySelectorAll('.afiches-grid img, .fotos-grid img');

        galleryImages.forEach(function(img) {

            
            img.onclick = function() {
                var fullSrc = this.getAttribute('src');
                modal.classList.add('show');
                modalImg.src = fullSrc;
            }
        });

        modal.onclick = function(event) {
            if (event.target === event.currentTarget || event.target.classList.contains('close')) { 
                modal.classList.remove('show');
            }
        }
    }
    const formulario = document.getElementById('contactoForm');
    const mensajeExito = document.getElementById('mensajeExito');

    if (formulario && mensajeExito) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); 
            formulario.style.display = 'none';
            mensajeExito.style.display = 'block';
            console.log("Simulación de Envío Exitosa.");
            console.log("Email:", formulario.querySelector('input[name="email"]').value);
            console.log("Asunto:", formulario.querySelector('input[name="asunto"]').value);
        });
    }
});