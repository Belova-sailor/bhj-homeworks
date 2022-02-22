const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
//console.log(dropdownList)

for (let index = 0; index < dropdownList.length; index++){
    const getNameList = function (index) {
        let name = dropdownList[index];
        return name;
    }

    let nameList = getNameList(index);
    console.log(nameList)


}