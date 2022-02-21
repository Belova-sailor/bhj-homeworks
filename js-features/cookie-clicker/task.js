const cliclicker = document.getElementById('clicker__counter');
const imgCookie = document.getElementById('cookie');

const cliclickerUp = () => {
    imgCookie.width += 30;
    imgCookie.height += 30;
};

const cliclickerDown = () => {
    imgCookie.width -= 30;
    imgCookie.height -= 30;
};

const clickerCounter = () => {
    cliclicker.textContent = Number(cliclicker.textContent) + 1;
};

imgCookie.onclick = () => {
    clickerCounter();
    if (Number(cliclicker.textContent) % 2 !== 0) {
        cliclickerUp();
    } else {cliclickerDown()};
}