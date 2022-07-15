const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderLeft = document.querySelector('.slider__arrow_prev');
const sliderRight = document.querySelector('.slider__arrow_next');

const changeImgRight = function () {
    let activeSlider = sliderItem.findIndex((index) => index.className === "slider__item slider__item_active");
    sliderItem[activeSlider].classList.remove('slider__item_active');
    activeSlider += 1;

    if (activeSlider === sliderItem.length) {
        activeSlider = 0;
    };

    sliderItem[activeSlider].classList.add('slider__item_active')
};

const changeImgLeft = function () {
    let activeSlider = sliderItem.findIndex((index) => index.className === "slider__item slider__item_active");
    sliderItem[activeSlider].classList.remove('slider__item_active');
    activeSlider -= 1;

    if (activeSlider < 0) {
        activeSlider = sliderItem.length - 1;
    };

    sliderItem[activeSlider].classList.add('slider__item_active')
};

sliderLeft.addEventListener('click', changeImgLeft);
sliderRight.addEventListener('click', changeImgRight)