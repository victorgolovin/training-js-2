// ВВОД И ВЫВОД ДАННЫХ


// alert() -  Выводит на экран данные от пользователя

alert('Hello!');

// confirm() - Выводит на экран данные и спрашивает от юзера да или нет

const isAdult = confirm('Are u adult?');

if (isAdult) {
    alert('U adult!');
} else {
    alert('U not adult!');
}


// prompt() - получает данные от юзера

const age = prompt('Введите свой возраст');

console.log(parseInt(age)); // стандартно выводит строку, нужно перевести ее в число с помощью parseInt()

if (isAdult2(age)) {
    alert('U adult!');
} else {
    alert('U not adult!');
}

alert(`Your age: ${age}`);

function isAdult2(age) {
    return age > 18; // возращаем функцию 
}