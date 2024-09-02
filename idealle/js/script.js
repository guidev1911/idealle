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

document.addEventListener("DOMContentLoaded", function() {
    // Animação typewriter para o h1
    const h1 = document.getElementById('animated-title');
    const phrases = ["Idealle sistemas","Transformando Negócios", "Simplificando a Gestão"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100; // Velocidade da digitação
    let delay = 2000; // Tempo de espera após digitar a frase

    function typeWriter() {
        if (charIndex < phrases[phraseIndex].length && !isDeleting) {
            // Digita a frase
            h1.textContent += phrases[phraseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else if (charIndex === phrases[phraseIndex].length && !isDeleting) {
            // Espera antes de começar a apagar
            setTimeout(() => {
                isDeleting = true;
                setTimeout(typeWriter, speed);
            }, delay);
        } else if (isDeleting) {
            // Apaga a frase
            if (charIndex > 0) {
                h1.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, speed);
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeWriter, speed);
            }
        }
    }

    typeWriter();
});

window.addEventListener('resize', () => {
    document.getElementById('starfield').width = window.innerWidth;
    document.getElementById('starfield').height = window.innerHeight;
});

function createStars() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let numStars = 900; // Aumentando o número de estrelas para mais realismo

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createStar() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 0.1 + 1,
            speedX: 0.15, // Movimento constante para a direita
            speedY: 0.15, // Movimento constante para baixo
            brightness: Math.random() * 0.5 + 0.7 // Adiciona brilho às estrelas
        };
    }

    for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            ctx.fill();
            star.x += star.speedX;
            star.y += star.speedY;

            if (star.x > canvas.width) star.x = 0;
            if (star.y > canvas.height) star.y = 0;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

createStars();

document.addEventListener("scroll", function() {
    const cards = document.querySelectorAll(".card");
    const triggerBottom = window.innerHeight * 0.9; // Ajuste o valor conforme necessário

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("visible");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');

    function handleScroll() {
        const contactSectionPosition = document.querySelector('.contact-section').getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Ajuste para controlar quando a animação deve iniciar

        if (contactSectionPosition < screenPosition) {
            contactInfo.classList.add('visible');
            contactForm.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

const container = document.getElementById('testimonials-container');
const testimonials = Array.from(container.children);
const totalItems = testimonials.length;
const itemWidth = testimonials[0].offsetWidth;

function cloneItems() {
    for (let i = 0; i < totalItems; i++) {
        const clone = testimonials[i].cloneNode(true);
        container.appendChild(clone);
    }
}

cloneItems();

const totalWidth = itemWidth * totalItems * 2;
container.style.width = `${totalWidth}px`;

function moveCarousel() {
    const currentTransform = parseFloat(container.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const newTransform = (currentTransform - itemWidth) % (itemWidth * totalItems);
    container.style.transform = `translateX(${newTransform}px)`;
}

setInterval(moveCarousel, 3000); // Muda de slide a cada 3 segundos



document.addEventListener('DOMContentLoaded', function () {
    const teamItems = document.querySelectorAll('.team-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    teamItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const animatedDiv = document.querySelector('.text-center');

    // Função para verificar se o elemento está visível na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Adiciona a classe 'show' quando a div aparece
            }
        });
    });

    // Observa a div
    observer.observe(animatedDiv);
});


document.addEventListener('scroll', function() {
    const divAnimada = document.querySelector('.tec-div-direita');
    const divAnimadaPosition = divAnimada.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Verifica se a div está visível na viewport
    if (divAnimadaPosition < windowHeight - 100) {
        divAnimada.classList.add('show');
    }
});
document.addEventListener('scroll', function() {
    const divAnimada = document.querySelector('.tec-div-direita-back');
    const divAnimadaPosition = divAnimada.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Verifica se a div está visível na viewport
    if (divAnimadaPosition < windowHeight - 100) {
        divAnimada.classList.add('show');
    }
});
document.addEventListener('scroll', function() {
    const divAnimada = document.querySelector('.tec-div-esquerda img');
    const divAnimadaPosition = divAnimada.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Verifica se a div está visível na viewport
    if (divAnimadaPosition < windowHeight - 100) {
        divAnimada.classList.add('show');
    }
});

// Slider para alternar imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 4000);

// Animação de scroll
window.addEventListener('scroll', function () {
    const containerInformacoes = document.querySelector('.container-informacoes');
    const position = containerInformacoes.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight) {
        containerInformacoes.classList.add('window-scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                if (index % 2 === 0) {
                    entry.target.classList.add('show-from-left');
                } else {
                    entry.target.classList.add('show-from-right');
                }
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, options);

    document.querySelectorAll('.solucao-item').forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.frase');
  
    function handleScroll() {
      const textPosition = text.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (textPosition < windowHeight * 0.75) { // Ajuste o valor conforme necessário
        text.classList.add('FraseVisible');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica a posição inicial
  });
