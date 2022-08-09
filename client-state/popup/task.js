const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

window.addEventListener('scroll', addModal);

modalClose.addEventListener('click', () => {
    document.cookie = 'close=true';
    modal.classList.remove('modal_active')
    
})

function addModal(){
    if(getCookie('close') === undefined){
        modal.classList.add('modal_active')
    }
}

function getCookie(name) {
    const cookie = document.cookie.split('=')[1];
    return cookie ? cookie === name : undefined
}



