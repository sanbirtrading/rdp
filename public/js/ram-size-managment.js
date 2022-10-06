// ram size managment in add server feature

const dropDownsItems = document.querySelectorAll('.dropdown-size');
const ramInput = document.querySelector('input#ram');
const inputSize = document.querySelector('.ram-size');

dropDownsItems.forEach(item => {
    item.addEventListener('click', () => {
        inputSize.value = item.innerText
    })
})


document.querySelector('#add-server').addEventListener('submit', () => {
    ramInput.value += inputSize.value;
})