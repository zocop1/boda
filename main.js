// Contador regresivo
function updateCountdown() {
    const weddingDate = new Date('2025-01-18T17:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Llamada inicial

// Intersection Observer para animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observar todos los elementos con la clase slide-up
document.querySelectorAll('.slide-up').forEach((element) => {
    observer.observe(element);
});

// Manejo del formulario
document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Recoger los datos del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        attending: document.getElementById('attending').value,
        guests: document.getElementById('guests').value,
        dietary: document.getElementById('dietary').value
    };

    // Aquí puedes agregar el código para enviar los datos a un servidor
    console.log('Datos del formulario:', formData);
    alert('¡Gracias por confirmar tu asistencia!');

    // Opcional: resetear el formulario
    this.reset();
});