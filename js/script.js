// Función para carrusel de cards 
const carousel = document.querySelector('.card-carousel');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
let currentIndex = 0;
let interval;

function showNextCard() {
    currentIndex = (currentIndex + 1) % totalCards; 
    updateCarousel();
}

function showPrevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; 
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 520; 
    carousel.style.transform = `translateX(${offset}px)`;
}

function startAutoSlide() {
    interval = setInterval(showNextCard, 5000);
}

// Iniciar el carrusel automático al cargar la página
startAutoSlide();

// Función para carrusel de cards 

// Funcion para funcionalidades en las cards
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.getElementsByClassName("close")[0];
    const cartCountElement = document.getElementById("cart-count");
    let cartCount = 0;

    document.querySelectorAll('.ver-detalles').forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            switch (index) {
                case 0:
                    modalTitle.innerText = 'Rutina superávit calorico + dieta';
                    modalDescription.innerText = 'Esta rutina te ayudará a ganar masa muscular y reducir adiposidad general. Generalmente suele ser de 4 semanas, y se va renovando dependiendo del objetivo específico. La rutina y la dieta van en dos documentos PDF, separados y se envían una semana luego de su compra. Objetivos: Aumento de masa muscular, mejora de la fuerza general. Combinación de pesas y ejercicios de calistenia. ';
                    break;
                case 1:
                    modalTitle.innerText = 'Recomposición corporal';
                    modalDescription.innerText = 'Este tipo de rutina se centra en la ganancia de masa muscular mientras se pierde grasa. Es esencial para aquella persona que no ha realizado ejercicio previamente y se quiere adentrar en el mundo del ejercicio. La rutina se envía por correo electrónico, en formato PDF, a la semana de realizar la compra. Perfil ideal: Principiantes/Personas con vida relativamente sedentaria. Objetivos: Mejora del estado físico y mayor energía durante el día.';
                    break;
                case 2:
                    modalTitle.innerText = 'Recetario déficit';
                    modalDescription.innerText = 'Plan de alimentación orientado a la pérdida de grasa manteniendo un déficit calórico. La rutina se envía por correo electrónico, en formato PDF, una semana después de haber realizado la compra. Duración: Varía según la persona y sus objetivos. Se recomienda seguirlo minimamente en un período de dos meses.';
                    break;
            }

            modal.style.display = "block";
        });
    });

    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    document.querySelectorAll('.cart-link').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            cartCount++;
            cartCountElement.innerText = cartCount;
        });
    });
});

// Funcion para funcionalidades en las cards

// Menu hamburguesa
const menuToggle = document.querySelector('.menu-toggle'); // Botón del menú
const nav = document.querySelector('.nav-left'); // Menú desplegable

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
});
