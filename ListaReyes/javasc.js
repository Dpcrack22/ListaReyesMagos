const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const links = document.querySelectorAll('.nav-link');
const introSections = document.querySelectorAll('.intro-section');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode'); // Cambia el modo en el body

    // Cambia el modo en las secciones de introducción
    introSections.forEach(section => {
        section.classList.toggle('light-mode');
    });

    // Cambia el color de los enlaces de navegación
    links.forEach(link => {
        link.classList.toggle('light-mode');
    });

    // Cambia el texto del botón dependiendo del modo
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Modo Oscuro';
    } else {
        toggleButton.textContent = 'Modo Claro';
    }
});