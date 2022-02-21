const menuLink = Array.from(document.querySelectorAll('.menu__link'));

for (let index = 0; index < menuLink.length; index++) {
    const getName = function (index) {
        let name = menuLink[index];
        return name;
    }

    let link = getName(index);

    link.onclick = () => {
        let sub = link.parentElement.querySelector('.menu_sub');
        if (sub !== null) {
            let subCollection = document.querySelectorAll('.menu_sub');
            subCollection.forEach(item => item.classList.remove('menu_active'));
            sub.classList.add('menu_active');
            return false;
        };
    };
}