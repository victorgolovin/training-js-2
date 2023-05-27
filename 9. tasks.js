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
    const DateResult = `${day}/${month}/${year}`;
    return DateResult;
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

getMonthByNumber(13);

function getMonthByNumber(monthNumber) {
    let month = Number(monthNumber);
    
    switch (month) {
        case 1:
            console.log(JANUART);
            break;
        case 2:
            console.log(FEBRUARY);
            break;
        case 3:
            console.log(MARCH);
            break;
        case 4:
            console.log(APRIL);
            break;
        case 5:
            console.log(MAY);
            break;
        case 6:
            console.log(JUNE);
            break;
        case 7:
            console.log(JULY);
            break;
        case 8:
            console.log(AUGUST);
            break;
        case 9:
            console.log(SEPTEMBER);
            break;
        case 10:
            console.log(OCTOBER);
            break;
        case 11:
            console.log(NOVEMBER);
            break;
        case 12:
            console.log(DECEMBER);
            break;
        default:
            console.log(ERROR_TEXT);
            break;
    }

    return month;
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

const RUB_USD_CURRENCY_TEXT_OUTPUT = 'USD';
const RUB_EUR_CURRENCY_TEXT_OUTPUT = 'EUR';
const RUB_KZT_CURRENCY_TEXT_OUTPUT = 'KZT';
const RUB_AED_CURRENCY_TEXT_OUTPUT = 'AED';

const CURRENCY_TEXT_ERROR = 'Ошибка ввода, конвертация поддерживает только USD, EUR, KZT и AED.'


convertRub(135342, 'USD');


function convertRub(valueRub, currency) {

    switch (valueRub, currency) {
        case RUB_USD_CURRENCY_TEXT_INPUT:
            console.log(valueRub * RUB_USD_CURRENCY_RATE + ' ' + RUB_USD_CURRENCY_TEXT_OUTPUT);
            break;
        case RUB_EUR_CURRENCY_TEXT_INPUT:
            console.log(valueRub * RUB_EUR_CURRENCY_RATE + ' ' + RUB_EUR_CURRENCY_TEXT_OUTPUT);
            break;
        case RUB_KZT_CURRENCY_TEXT_INPUT:
            console.log(valueRub * RUB_KZT_CURRENCY_RATE + ' ' + RUB_KZT_CURRENCY_TEXT_OUTPUT);
            break;
        case RUB_AED_CURRENCY_TEXT_INPUT:
            console.log(valueRub * RUB_AED_CURRENCY_RATE + ' ' + RUB_AED_CURRENCY_TEXT_OUTPUT);
            break;
        default:
            console.log(CURRENCY_TEXT_ERROR);
            break;
    }

    return valueRub;
}






