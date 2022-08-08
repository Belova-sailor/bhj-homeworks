const progress = document.querySelector('#progress');
const requestURL = 'https://netology-slow-rest.herokuapp.com/upload.php';
const button = document.querySelector('#send');
const form = document.getElementById('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', requestURL);

    xhr.upload.onprogress = (event) => {
            progress.value = event.loaded / event.total;
    }

    xhr.send(formData)
})
