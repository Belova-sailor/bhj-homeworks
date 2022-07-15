const tabNavigation = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

function changeTab() {
    tabNavigation.forEach(item => {
        if (item.classList.contains('tab_active')) {
            item.classList.remove('tab_active');
            tabContent[tabNavigation.indexOf(item)].classList.remove('tab__content_active');
        };

        this.classList.add('tab_active');
        tabContent[tabNavigation.indexOf(this)].classList.add('tab__content_active');
    });
};

tabNavigation.forEach(item => item.addEventListener('click', changeTab))