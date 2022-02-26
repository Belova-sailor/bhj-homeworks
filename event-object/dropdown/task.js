const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));

for (let index = 0; index < dropdownValue.length; index++) {
    const getName = function (index) {
        let name = dropdownValue[index];
        return name;
    };

    let activeValue = getName(index);
    const dropdown = activeValue.closest('.dropdown');

    activeValue.onclick = () => {
        const dropdownList = dropdown.querySelector('.dropdown__list');
        const dropdownListActive = dropdown.querySelector('.dropdown__list_active');

        if (dropdownListActive === null) {
            dropdownList.classList.add('dropdown__list_active');
        } else {
            dropdownList.classList.remove('dropdown__list_active');
        };

        return false;
    };

    const dropdownItem = Array.from(dropdown.querySelectorAll('.dropdown__item'));
    
    for (let j = 0; j < dropdownItem.length; j++) {
        const getNameItem = function () {
            let nameItem = dropdownItem[j];
            return nameItem;
        };

        let activeItem = getNameItem(j);

        activeItem.onclick = () => {
            activeValue.textContent = activeItem.querySelector('.dropdown__link').textContent;
            activeItem.closest('.dropdown__list').classList.remove('dropdown__list_active');
            return false;
        };
    };
}