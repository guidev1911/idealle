document.addEventListener("DOMContentLoaded", function() {
    // JavaScript para abrir o vídeo com fundo borrado
    document.querySelector('.btn-watch-video').addEventListener('click', function(event) {
        event.preventDefault();
        var videoOverlay = document.getElementById('videoOverlay');
        var videoFrame = document.getElementById('videoFrame');
        videoFrame.src = 'https://www.youtube.com/embed/ZV16ev0n9J8?autoplay=1';
        videoOverlay.classList.add('active');
    });

    // Fechar o vídeo ao clicar fora do vídeo
    document.getElementById('videoOverlay').addEventListener('click', function(event) {
        if (event.target === this) {
            var videoOverlay = document.getElementById('videoOverlay');
            var videoFrame = document.getElementById('videoFrame');
            videoFrame.src = '';
            videoOverlay.classList.remove('active');
        }
    });

    // Adiciona a animação de estrelas piscando
    const canvas = document.createElement('canvas');
    canvas.className = 'stars';
    document.querySelector('.content').appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const numStars = 100;

    function createStar() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.5, // Opacidade inicial
            alphaDirection: Math.random() < 0.5 ? 1 : -1 // Direção de alteração da opacidade
        };
    }

    for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';

        stars.forEach(star => {
            ctx.globalAlpha = star.alpha;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            star.x += star.speed;
            if (star.x > canvas.width) {
                star.x = 0;
            }

            // Alterando a opacidade das estrelas para criar o efeito de piscar
            star.alpha += star.alphaDirection * 0.01;
            if (star.alpha > 1 || star.alpha < 0.1) {
                star.alphaDirection *= -1;
            }
        });
    }

    function animate() {
        drawStars();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Adiciona a animação do menu ao rolar a página
    const menu = document.querySelector('.menu');
    const menuHeight = menu.offsetHeight; // Altura do menu

    function onScroll() {
        if (window.scrollY > menuHeight) {
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    }

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


