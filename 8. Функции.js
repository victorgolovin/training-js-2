// ФУНКЦИИ

// Создание функции

sayHi(); // вызов функции, функция без вызова не выполнится

function sayHi() { // в склюбках задачем или не задаем значение
    console.log('Hello')
}

// Передача параметров 

function sum(a, b) { // функция вернет число
    return a + b;
}

console.log(sum(1, 5));

// Возвращение значений

const name = 'Victor';
const surname = 'Golovin';
const fullname = buildFullName(name, surname);

console.log(fullname);

function buildFullName(name, surname) {
    return `${name} ${surname}`; // функция вернет строку
}


const myAge = 20;
const canIGoDance = isAdult(myAge)

console.log(canIGoDance);

function isAdult(age) {
    return age > 18; // вернет boolean
}