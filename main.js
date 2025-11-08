// Покраска всех карточек

const allProductCards = document.querySelectorAll('.card-container');
const btnChangeColorAllCards = document.querySelector('#btn-change-color-all-cards');
const greenColorHash = '#00FF00'

btnChangeColorAllCards.addEventListener('click',() => {
  allProductCards.forEach((card)=> card.style.backgroundColor = greenColorHash)
});

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const btnChangeColorFirstCard = document.querySelector('#btn-change-color-first-card');
const yellowColorHash = '#FFFF00'

btnChangeColorFirstCard.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = yellowColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#btn-open-google');
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open ('http://google.com')
  } else {
    return;
  }
}

// Вывод в консоль лог

const btnShowMessage = document.querySelector('#btn-show-message')
btnShowMessage.addEventListener('click', () => showMessage('ДЗ №4'))

function showMessage(message) {
  alert(message)
  console.log(message)
}

const mainTitle = document.querySelector('.main-title')
mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
})

// Смена фона кнопки по нажатию 

const btnToggleColor = document.querySelector('#btn-change-bg')
btnToggleColor.addEventListener('click', () => {
  btnToggleColor.classList.toggle('bg-yellow')
})