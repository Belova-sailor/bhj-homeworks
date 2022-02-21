const timer = document.getElementById('timer');

setInterval(() => {
    if (Number(timer.textContent) !== 0) {
        timer.textContent = Number(timer.textContent) - 1;
    } else {
        alert('Вы победили в конкурсе!');
    }
}, 1000);