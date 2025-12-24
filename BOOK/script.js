const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumberLabel = document.getElementById('pageNumber');

let currentIndex = 0;

function updateDisplay() {
    // Cambiar visibilidad de párrafos
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === currentIndex);
    });

    // Actualizar contador 1/5
    pageNumberLabel.innerText = `${currentIndex + 1} / ${pages.length}`;

    // Bloquear botones en los extremos
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === pages.length - 1);
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < pages.length - 1) {
        currentIndex++;
        updateDisplay();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
});

// Iniciar
updateDisplay();

window.addEventListener('load', () => {
    const musica = document.getElementById('miMusica');
    
    // Intentar reproducir apenas cargue
    const playPromise = musica.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Si el navegador aún es tímido, se activará al primer movimiento/clic en esta página
            console.log("Esperando interacción final para audio.");
            document.addEventListener('click', () => {
                musica.play();
            }, { once: true });
        });
    }
});

// ... aquí sigue el resto de tu código de las flechas de la carta ...