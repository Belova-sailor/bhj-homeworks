(() => {
    const modalMain = document.querySelector('#modal_main');
    const modalSuccess = document.querySelector('#modal_success');
    const modalClose = document.querySelectorAll('.modal__close_times');
    const showSuccess = document.querySelector('.show-success');

    modalMain.classList.add('modal_active');

    showSuccess.addEventListener('click', () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });

    modalClose[0].addEventListener('click', () => {
        modalMain.classList.remove('modal_active');
    });

    modalClose[1].addEventListener('click', () => {
        modalSuccess.classList.remove('modal_active');
    });
})()