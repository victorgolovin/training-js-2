// Задание 1️⃣
// Напишите функцию printNumbers, которая выводит в консоль числа от -10 до 10.

// function printNumbers(numbers) {
//     for (let index = -10; index <= 10; index++) {
//         numbers = 10;
//         console.log(index);
//     }

//     return numbers;
// }

// printNumbers();


console.log('-----------------------------')
// Задание 2️⃣

// Напишите функцию printNumbersByRange(start, end), которая выводит в консоль числа в диапазоне. 
// Диапазон задается начальным и конечным числом. 
// Например, в результате вызова функции с параметрами -3 и 2 (printNumbersByRange(-3, 2) в консоль выводятся числа: -3, -2, -1, 0, 1, 2.

function printNumbersByRange(start, end) {
    for (let index = start; index <= end; index++) {
        console.log(index);    
    }

    return start, end;
}

printNumbersByRange(-3, 2);


console.log('-----------------------------')
// Задание 3️⃣

// Напишите функцию calculateNumbersSum(numbers), которая на вход принимает массив чисел и возвращает сумму этих чисел. 
// Например, calculateNumbersSum([0, 1, 2, 4, 8] возвращает 15.

const numbers = [];

function calculateNumbersSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
        console.log(sum)
    }

    return numbers;
}

calculateNumbersSum([3, 5, 10, 56]);

console.log('-----------------------------')
// Задание 4️⃣

// Напишите функцию includes(numbers, number), которая на вход принимает массив чисел и число. 
// Если число есть в массиве чисел, функция возвращает true, иначе - false.



// Задание 5️⃣

// Напишите функцию createPerson(name, surname, age). 
// Функция принимаем имя человека, фамилию и возраст. 
// Функция возвращает объект с полями name, surname, age.



// Задание 6️⃣

// Напишите функцию findOldest(people). 
// Функция принимает массив из объектов. 
// Каждый объект создайте через функцию createPerson. 
// Функция возвращает имя самого старшего человека.