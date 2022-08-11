const form = document.querySelector('#signin__form');
const button = document.querySelector('#signin__btn');
const formSign = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');

if (!form.classList.contains('signin_active')) {
    form.classList.add('signin_active')
}

button.addEventListener('click', (ev) => {
    ev.preventDefault();

    const formData = new FormData(form);
    const requestURL = form.getAttribute("action");
    const xhr = new XMLHttpRequest();

    xhr.open('POST', requestURL);
    xhr.response = 'json';

    xhr.onload = () => {
        if (xhr.status >= 400) {
            console.error(xhr.response)
        } else {
            let responseObj = JSON.parse(xhr.response);
            
            if (responseObj.success) {
                localStorage.userId = responseObj.user_id;
                addActive();
                userId.innerText = responseObj.user_id;
            } else {
                alert('Неверные логин или пароль');
            };

            form.reset()
        }
    };

    xhr.onerror = () => console.log(xhr.response);

    xhr.send(formData)
})

function addActive() {
    if (localStorage.userId) {
        formSign.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    };
};


