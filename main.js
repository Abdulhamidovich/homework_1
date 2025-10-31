const greenColorHash = '#00FF00'
const blueColorHash = '#FFFF00'


// Покраска всех карточек

const allProductCards = document.querySelectorAll ('.card-container');
const btnAllProductCards = document.querySelector ('#btn-change-color-all-cards');

btnAllProductCards.addEventListener('click', ()=> {
  allProductCards.forEach((card) => card.style.backgroundColor = greenColorHash) 
  });

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const btnChangeColorFirstCard = document.querySelector ('#btn-change-color-first-card');

btnChangeColorFirstCard.addEventListener ('click', ()=> {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector ('#btn-open-google');
openGoogleButton.addEventListener ('click', openGoogle)

function openGoogle () {
  const answer = confirm ('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open ('http://google.com')
  } else {
    return;
  }
}

// Вывод в консоль лог

const outputLogButton = document.querySelector ('#btn-output-console-log')
outputLogButton.addEventListener ('click', ()=> outputConsoleLog ('ДЗ №4'))

function outputConsoleLog (message) {
  alert(message)
  console.log (message)
}

const titleInLog = document.querySelector ('.main-title')
titleInLog.addEventListener ('mouseover', () => {
  console.log (titleInLog);
})

// Смена фона кнопки по нажатию 

const btnChangeBG = document.querySelector ('#btn-change-bg')
btnChangeBG.addEventListener ('click', ()=> {
if (btnChangeBG.classList.contains('btn-change-bg')) {
  btnChangeBG.classList.remove('btn-change-bg');
} else {
  btnChangeBG.classList.add('btn-change-bg')
}
})