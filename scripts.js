document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('join-button').addEventListener('click', function () {
        const target = document.getElementById('join');
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const navLinks = document.querySelectorAll('.header a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const joinButton = document.getElementById('join-button');
    joinButton.addEventListener('click', function () {
        const target = document.getElementById('join');
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth',
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');

    backgroundMusic.volume = 0.075;

    backgroundMusic.play().catch(err => {
        console.warn('音楽の自動再生がブロックされました。');
    });

    musicToggle.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(err => {
                console.error('音楽の再生に失敗しました:', err);
            });
            musicToggle.classList.remove('active');
        } else {
            backgroundMusic.pause();
            musicToggle.classList.add('active');
        }
    });
});