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