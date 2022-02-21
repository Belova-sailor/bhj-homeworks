const sliderLeft = document.querySelector('.slider__arrow_prev');
const sliderRight = document.querySelector('.slider__arrow_next');
const sliderItems = document.getElementsByClassName('slider__item');
let activeImg = 0;

const changeImgLeft = function () {
    sliderItems[activeImg].classList.remove('slider__item_active');
    activeImg += 1;

    if (activeImg === sliderItems.length) {
        activeImg = 0;
    };

    sliderItems[activeImg].classList.add('slider__item_active');
    return activeImg;
};

const changeImgRight = function () {
    sliderItems[activeImg].classList.remove('slider__item_active');
    activeImg -= 1;

    if (activeImg < 0) {
        activeImg = sliderItems.length - 1;
    };

    sliderItems[activeImg].classList.add('slider__item_active');
    return activeImg;
};

sliderLeft.addEventListener('click', changeImgLeft);
sliderRight.addEventListener('click', changeImgRight)