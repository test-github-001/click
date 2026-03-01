"use strict"

// ПЕРЕМЕННЫЕ
let score = 0 // начальный счет
let scoreByClick = 1 // сколько добавляем за клик
let scoreBySecond = 0 // сколько добавляем каждую секунду
setInterval(addScoreBySecond, 1000)

// ПОЛУЧАЕМ ССЫЛКИ НА ТЕКСТОВЫЕ ПОЛЯ
const scoreText = document.getElementById('score') // поле со счетом
const clickText = document.getElementById('add-click') // поле дохода за клик
const idleText = document.getElementById('add-idle') // поле дохода в секунду

// ПОЛУЧАЕМ ССЫЛКИ НА КНОПКИ И ДОБАВЛЯЕМ СЛУШАТЕЛИ КЛИКА
const mainButton = document.getElementById('main-button')
mainButton.onclick = addScoreByClick // addScoreByClick - функция клика

const shopButtons = document.querySelectorAll('.shop') // магазин
shopButtons.forEach( shopBtn => shopBtn.onclick = getShopClick )

// ФУНКЦИИ

// функция клика
function addScoreByClick() {
    score = score + scoreByClick // в переменную score обновляем счет
    scoreText.innerText = score // заменяем текст с очками

    // ЕСЛИ НУЖНО СМЕНИТЬ КАРТИНКУ - добавьте код ниже
    mainButton.src = './button_on.png' // на какую заменить
    // какую картинку вернуть и через сколько миллисекунд
    setTimeout( () => mainButton.src = './button.png', 300)
}

// добавление очков каждую секунду
function addScoreBySecond() {
    score = score + scoreBySecond // в переменную score обновляем счет
    scoreText.innerText = score // заменяем текст с очками
}

// клик по карточке в магазине
function getShopClick(event) {
    const price = +event.target.dataset.price
    const add = +event.target.dataset.add
    const type = event.target.dataset.type
    if (score < price) {
        event.target.classList.add('red-border')
        setTimeout( () => event.target.classList.remove('red-border'), 300 )
        return
    }
    score = score - price
    scoreText.innerText = score // заменяем текст с очками
    if (type === "click") {
        scoreByClick = scoreByClick + add
        clickText.innerText = scoreByClick
    } else {
        scoreBySecond = scoreBySecond + add
        idleText.innerText = scoreBySecond
    }
    event.target.classList.add('lime-border')
    setTimeout( () => event.target.classList.remove('lime-border'), 300 )
}
