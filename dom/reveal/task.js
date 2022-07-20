const revealText = Array.from(document.querySelectorAll('.reveal'));

function isVisible() {
    revealText.forEach(item => {
        let revealTop = item.getBoundingClientRect().y;

        if (revealTop < window.innerHeight && revealTop > 0) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        };
    });
};

window.addEventListener('scroll', isVisible)