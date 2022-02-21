const clickerDead = document.getElementById('dead');
const clickerLost = document.getElementById('lost');

const clickerCounterDead = () => {
    clickerDead.textContent = Number(clickerDead.textContent) + 1;
};

const clickerCounterLost = () => {
    clickerLost.textContent = Number(clickerLost.textContent) + 1;
};

for (let index = 1; index <= 9; index++) {
    function getHole(index) {
        let holeClick = document.getElementById(`hole${index}`);
        return holeClick;
    };

    let hole = getHole(index);

    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            clickerCounterDead();
        } else {
            clickerCounterLost();
        };

        if (Number(clickerDead.textContent) === 10) {
            alert('Победа! Огород спасен - все кроты уничтожены!');
            clickerDead.textContent = 0;
            clickerLost.textContent = 0;
        } else if (Number(clickerLost.textContent) === 5) {
            alert('Вы проиграли! Весь урожай съеден кротами!');
            clickerDead.textContent = 0;
            clickerLost.textContent = 0;
        };
    };
}

getHole = index => document.getElementById(`hole${index}`)