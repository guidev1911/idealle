document.addEventListener("DOMContentLoaded", function() {
    // JavaScript para abrir o vídeo com fundo borrado


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

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Altera a imagem a cada 3 segundos
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}



