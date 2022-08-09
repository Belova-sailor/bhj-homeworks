document.querySelector('#editor').addEventListener('input', saveText);

function saveText(ev) {
    localStorage.text = editor.value
}

editor.value = localStorage.getItem('text');

document.querySelector('.button').addEventListener('click', (ev) => {
    localStorage.removeItem('text');
    editor.value = ''
})



