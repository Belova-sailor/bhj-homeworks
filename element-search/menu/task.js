const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach((link) => {
    link.onclick = () => {
        let sub = link.parentElement.querySelector('.menu_sub');
        let menuActive = link.parentElement.querySelector('.menu_active');

        if (sub) {
            if (menuActive) {
                sub.classList.remove('menu_active');
            } else {
                let subCollection = document.querySelectorAll('.menu_sub');
                subCollection.forEach(item => item.classList.remove('menu_active'));
                sub.classList.add('menu_active');
            };

            return false;
        }
    };
})