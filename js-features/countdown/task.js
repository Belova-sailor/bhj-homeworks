const timer = document.getElementById('timer');
let timerId;

function counter() {
    if (Number(timer.textContent) !== 0) {
        timer.textContent = Number(timer.textContent) - 1;
    } else {
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    };
};

timerId = setInterval(counter, 1000)






