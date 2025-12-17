import {productCardTemplate} from "./product-cards.js";

const cardListTemplate = document.querySelector('#card-list-template')
const cardList = document.querySelector('#card-list')

// Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5"
//  и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if).
// P.S - код из задания №3 переместить в функцию, не нужно его дублировать

const getCardsCount = () => {
    const result = Number(prompt("Сколько карточек отобразить?"))
    if (result < 1 || result > 5 || isNaN(result)) {
        alert("Ошибка! Введите число от 1 до 5");
        return getCardsCount();
    }
    return result;
}

const showCards = getCardsCount()
productCardTemplate.forEach((card, index) => {
    if (index >= showCards) return;
    const cardCloned = cardListTemplate.content.cloneNode(true);
    const imgSrc = '/images/'
    const compaundList = item => {

    }
    cardCloned.querySelector('.product-category').textContent = card.category;
    cardCloned.querySelector('.product-name').textContent = card.name;
    cardCloned.querySelector('.description').textContent = card.description;
    cardCloned.querySelector('.product-compound').innerHTML = card.compound
    .map(item => `<li>${item}</li>`)
    .join('');
    cardCloned.querySelector('.product-price').textContent = `${card.price} ${card.currency}`;
    cardCloned.querySelector('img').src = `${imgSrc}${card.imgSrc}`;
    cardCloned.querySelector('img').alt = card.name;
    cardList.appendChild(cardCloned);
});

// Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productCardNames = productCardTemplate.reduce((acc, card) => {
    acc.push(card.productName)
    return acc;
}, []).join('; ')
console.log(productCardNames);

// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productArray = productCardTemplate.reduce((acc, card) => {
    acc.push({[card.productName] : card.description});
    return acc;
}, [] )
console.log(productArray);