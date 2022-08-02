const links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        if (!(item.nextElementSibling && item.nextElementSibling.classList.contains('tooltip'))) {
            item.insertAdjacentHTML("afterend", '<div class="tooltip">Текст подсказки</div>');
        };
        
        item.nextElementSibling.classList.toggle('tooltip_active');
        item.nextElementSibling.textContent = item.title;
        item.nextElementSibling.style.left = `${item.getBoundingClientRect().left}px`;
        item.nextElementSibling.style.top = `${item.getBoundingClientRect().top + 20}px`;
    });
})



