const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

function turnRotator() {
    setInterval(() => {
        let activeCase = rotatorCases.findIndex((index) => index.className === "rotator__case rotator__case_active");
        rotatorCases[activeCase].classList.remove('rotator__case_active');
        activeCase += 1;

        if (activeCase === rotatorCases.length) {
            activeCase = 0;
        };

        rotatorCases[activeCase].classList.add('rotator__case_active');
    }, 1000);
};

turnRotator()
