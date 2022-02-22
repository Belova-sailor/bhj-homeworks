(() => {
    const modalMain = document.querySelector('#modal_main');
    const modalSuccess = document.querySelector('#modal_success');
    const modalClose = Array.from(document.querySelectorAll('.modal__close_times'));
    const showSuccess = document.querySelector('.show-success');

    modalMain.classList.add('modal_active');

    showSuccess.addEventListener('click', () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });

    for (let index = 0; index < modalClose.length; index++) {
        function getName(index) {
            let name = modalClose[index];
            return name;
        };

        let closeTimes = getName(index);

        closeTimes.onclick = () => {
            let modalActive = closeTimes.closest('.modal_active');
            
            if (modalActive !== null) {
                modalActive.classList.remove('modal_active');
            };
        };
    };
})()