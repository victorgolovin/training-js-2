// ОПЕРАТОРЫ СРАВНЕНИЯ

// Сравнение ==
const a = 1;
const b = 3;

console.log(a == b); // Задаем вопрос компьютеру, один равно трем? Ответ - нет (false)

// Не равно != 

console.log(a != b) // три не равно трем? Ответ - да (true)

// Больше >
console.log(a > b) // один больше трех?  Ответ - нет (false)

// Меньше <
console.log(a < b) // один меньше трех?  Ответ - да (true)

// Сравнение строк
const myName = 'Victor';
const myFriendName = 'Andrey';

console.log(myName == myFriendName); // Мое имя такое же как имя моего друга? твет - нет (false)

// Сравнение Boolean 

console.log(true == true);

// Строгое сравнение === !==

const c = 3; // тип данных число
const d = '3'; // тип данных строка

console.log(c == d); // обычное сравнение  не учитывает тип данных показывает true, хотя на самом деле это false
console.log(c === d); // строгое сравнение учитывает тип данных и показывает что число 3 не равно строке 3.
console.log(c !== d); // строгое не равно, говорит нам что число 3 не равно строке 3


const bagPrice = 30000;
const limit = 20000;
const canIBuyBag = bagPrice < limit;

console.log(canIBuyBag);