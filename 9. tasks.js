// Задание 1️⃣
// Напишите функцию multiple(a, b), которая перемножает два числа между собой. 
// Функция возвращает результат умножения.



function multiple(a, b) {
    const result = a * b;
    return result;
}

console.log(multiple(3, 6));


// Задание 2️⃣
// Напишите функцию buildDate(day, month, year), которая принимает на вход числами день недели, месяц и год. 
// Функция возвращает дату строкой в формате dd/mm/yyyy.

function buildDate(day, month, year) {
    const dateResult = `${day}/${month}/${year}`;
    return dateResult;
}

console.log(buildDate(13, 06, 1994));


// Задание 3️⃣
// Напишите функцию isAdult(age), которая принимает на вход возраст. 
// Если возраст больше или равен 18, функция возвращает true. Иначе - false.

const ADULT = 18;

function isAdult(age) {
    if (age >= ADULT) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(17));


// Задание 4️⃣
// Напишите функцию getMonthByNumber(monthNumber), которая на вход принимает порядковый номер месяца от 1 до 12. 
// Функция возвращает строкой название месяца (например, 'март'). Для решения задачи можно применить конструкцию switch-case (just google it).

const JANUART = 'Январь';
const FEBRUARY = 'Февраль';
const MARCH = 'Март';
const APRIL = 'Апрель';
const MAY = 'Май';
const JUNE = 'Июнь';
const JULY = 'Июль';
const AUGUST = 'Август';
const SEPTEMBER = 'Сентябрь';
const OCTOBER = 'Октябрь';
const NOVEMBER = 'Ноябрь';
const DECEMBER = 'Декабрь';

const ERROR_TEXT = 'Ошибка ввода';

getMonthByNumber(5);

function getMonthByNumber(monthNumber) {
    
    switch (monthNumber) {
        case 1:
            return console.log(JANUART);
        case 2:
            return console.log(FEBRUARY);
        case 3:
            return console.log(MARCH);
        case 4:
            return console.log(APRIL);
        case 5:
            return console.log(MAY);
        case 6:
            return console.log(JUNE);
        case 7:
            return console.log(JULY);
        case 8:
            return console.log(AUGUST);
        case 9:
            return console.log(SEPTEMBER);
        case 10:
            return console.log(OCTOBER);
        case 11:
            return console.log(NOVEMBER);
        case 12:
            return console.log(DECEMBER);
        default:
            return console.log(ERROR_TEXT);
    }
}


// Задание 5️⃣
// Напишите функцию convertRub(valueRub, currency), которая конвертирует рубли в другие валюты. 
// Функция принимает число в рублях и валюту для перевода строкой ('USD, 'EUR', 'KZT', 'AED'). 
// Функция возвращает результат конвертации. Для решения задачи можно применить конструкцию switch-case (just google it).


const RUB_USD_CURRENCY_RATE = 0.012;
const RUB_EUR_CURRENCY_RATE = 0.013;
const RUB_KZT_CURRENCY_RATE = 5.56;
const RUB_AED_CURRENCY_RATE = 0.046;

const RUB_USD_CURRENCY_TEXT_INPUT = 'USD';
const RUB_EUR_CURRENCY_TEXT_INPUT = 'EUR';
const RUB_KZT_CURRENCY_TEXT_INPUT = 'KZT';
const RUB_AED_CURRENCY_TEXT_INPUT = 'AED';

const CURRENCY_TEXT_ERROR = 'Ошибка ввода, конвертация поддерживает только USD, EUR, KZT и AED.'


convertRub(543, 'KZT');


function convertRub(valueRub, currency) {

    switch (valueRub, currency) {
        case RUB_USD_CURRENCY_TEXT_INPUT:
            return console.log(valueRub * RUB_USD_CURRENCY_RATE + ' ' + RUB_USD_CURRENCY_TEXT_INPUT);
        case RUB_EUR_CURRENCY_TEXT_INPUT:
            return console.log(valueRub * RUB_EUR_CURRENCY_RATE + ' ' + RUB_EUR_CURRENCY_TEXT_INPUT);
        case RUB_KZT_CURRENCY_TEXT_INPUT:
            return console.log(valueRub * RUB_KZT_CURRENCY_RATE + ' ' + RUB_KZT_CURRENCY_TEXT_INPUT);
        case RUB_AED_CURRENCY_TEXT_INPUT:
            return console.log(valueRub * RUB_AED_CURRENCY_RATE + ' ' + RUB_AED_CURRENCY_TEXT_INPUT);
        default:
            return console.log(CURRENCY_TEXT_ERROR);
    }
}