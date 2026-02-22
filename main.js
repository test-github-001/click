"use strict"

// ПЕРЕМЕННЫЕ
let score = 0 // начальный счет
let scoreByClick = 1 // сколько добавляем за клик

// ПОЛУЧАЕМ ССЫЛКИ НА ТЕКСТОВЫЕ ПОЛЯ
const scoreText = document.getElementById('score')

// ПОЛУЧАЕМ ССЫЛКИ НА КНОПКИ И ДОБАВЛЯЕМ СЛУШАТЕЛИ КЛИКА
const mainButton = document.getElementById('main-button')
mainButton.onclick = addScoreByClick // addScoreByClick - функция клика

// ФУНКЦИИ

// функция клика
function addScoreByClick() {
    score = score + scoreByClick // в переменную score обновляем счет
    scoreText.innerText = score // заменяем текст с очками
}