
const numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', () => {
    const number = Number(numberInput.value);
    if (number <= -10 || number >= 10) {
        alert('The number should be between -10 and 10');
    }
});

const fruit = {
    name: 'Apple',
    color: 'Red',
    taste: 'Sweet'
};


const fruitNameElement = document.querySelector('#fruitName');
const fruitColorElement = document.querySelector('#fruitColor');
const fruitTasteElement = document.querySelector('#fruitTaste');


fruitNameElement.innerHTML = Name: ${fruit.name};
fruitColorElement.innerHTML = Color: ${fruit.color};
fruitTasteElement.innerHTML = Taste: ${fruit.taste};