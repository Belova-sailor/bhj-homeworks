const requestURL = 'https://netology-slow-rest.herokuapp.com';

const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);

xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
        const valuteObj = xhr.response.response['Valute'];
        const loader = document.querySelector('.loader');
        const itemValute = document.querySelector('.item');

        loader.classList.remove('loader_active');

        for (let i in valuteObj) {
            if (valuteObj.hasOwnProperty(i)) {
                itemValute.insertAdjacentHTML("afterend",
                    `<div class="item__code">
                    ${valuteObj[i].CharCode}
                     </div><div class="item__value">
                    ${valuteObj[i].Value}
                    </div><div class="item__currency">руб.</div>`)
            }
        }
    }
}

xhr.responseType = 'json';
xhr.send()

