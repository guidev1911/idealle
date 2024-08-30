document.addEventListener("DOMContentLoaded", function() {
    
    // Adiciona a animação do menu ao rolar a página
    window.addEventListener('scroll', function() {
        const div = document.querySelector('.menu');
        if (window.scrollY > 0) {
          div.classList.add('scrolled');
        } else {
          div.classList.remove('scrolled');
        }
      });

    // Adiciona um listener de scroll
    window.addEventListener('scroll', onScroll);

    // Verifica o scroll ao carregar a página
    onScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('toggle-class');
    const submenu = document.getElementById('submenu');

    menuButton.addEventListener('click', function() {
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const submenu = document.getElementById('submenu');

    menuButton.addEventListener('click', function() {
        if (submenu.style.transform === 'translateY(0%)') {
            submenu.style.transform = 'translateY(-100%)';
            submenu.style.opacity = '0';
        } else {
            submenu.style.transform = 'translateY(0%)';
            submenu.style.opacity = '1';
        }
    });
});

const container = document.querySelector('.profile-container');
const profiles = document.querySelectorAll('.profile');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;
const visibleProfiles = 3; // Mostra 3 perfis completos e a prévia do 4º

function updateCarousel() {
    const offset = currentIndex * (profiles[0].clientWidth + 40); // Adiciona a margem de 40px
    container.style.transform = `translateX(-${offset}px)`;
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < profiles.length - visibleProfiles) {
        currentIndex++;
        updateCarousel();
    }
});

// Adiciona os links de LinkedIn
profiles.forEach(profile => {
    profile.addEventListener('click', () => {
        const link = profile.getAttribute('data-link');
        window.open(link, '_blank');
    });
});

window.addEventListener('resize', updateCarousel);










