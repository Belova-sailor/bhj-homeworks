const quantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const productAdd = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products');

quantityControl.forEach((item, i) => {
    quantityControl[i].addEventListener('click', () => {
        if (item.classList.contains('product__quantity-control_dec')) {
            quantityControl[i].nextElementSibling.textContent > 0
                ? quantityControl[i].nextElementSibling.textContent--
                : quantityControl[i].nextElementSibling.textContent = 0;
        };

        if (item.classList.contains('product__quantity-control_inc')) {
            quantityControl[i].previousElementSibling.textContent++;
        }
    });
});

productAdd.forEach((item, i) =>
    productAdd[i].addEventListener('click', () => {
        const id = item.closest('.product').dataset.id;
        const img = item.closest('.product').children[1].getAttribute('src');
        const value = item.parentElement.querySelector('.product__quantity-value').innerText;
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        const elemProduct = cartProduct.find((elem) => elem.dataset.id === id);

        if (elemProduct) {
            const valueCount = Number(elemProduct.querySelector('.cart__product-count').innerText);
            elemProduct.querySelector('.cart__product-count').innerText = valueCount + (+value);
        } else if (value > 0) {
            cartProducts.insertAdjacentHTML('beforeEnd',
                `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${value}</div>
            </div>`);
        };
    }))

