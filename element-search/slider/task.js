const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderLeft = document.querySelector('.slider__arrow_prev');
const sliderRight = document.querySelector('.slider__arrow_next');

let activeSlider = sliderItem.findIndex((index) => {
    return index.className === "slider__item slider__item_active"
});

const changeImgRight = function () {
    sliderItem[activeSlider].classList.remove('slider__item_active');
    activeSlider += 1;

    if (activeSlider === sliderItem.length) {
        activeSlider = 0;
    };

    sliderItem[activeSlider].classList.add('slider__item_active');
    return activeSlider;
};

const changeImgLeft = function () {
    sliderItem[activeSlider].classList.remove('slider__item_active');
    activeSlider -= 1;

    if (activeSlider < 0) {
        activeSlider = sliderItem.length - 1;
    };

    sliderItem[activeSlider].classList.add('slider__item_active');
    return activeSlider;
};

sliderLeft.addEventListener('click', changeImgLeft);
sliderRight.addEventListener('click', changeImgRight)