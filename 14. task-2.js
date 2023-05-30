// Задание 1️⃣
// Напишите функцию printNumbers, которая выводит в консоль числа от -10 до 10.

// function printNumbers(numbers) {
//     for (let index = -10; index <= 10; index++) {
//         numbers = 10;
//         console.log(index);
//     }

//     return numbers;
// };

// printNumbers();


console.log('-----------------------------')
// Задание 2️⃣

// Напишите функцию printNumbersByRange(start, end), которая выводит в консоль числа в диапазоне. 
// Диапазон задается начальным и конечным числом. 
// Например, в результате вызова функции с параметрами -3 и 2 (printNumbersByRange(-3, 2) в консоль выводятся числа: -3, -2, -1, 0, 1, 2.

function printNumbersByRange(start, end) {
    for (let index = start; index <= end; index++) {
        console.log(index);    
    };

    return start, end;
};

printNumbersByRange(-3, 2);


console.log('-----------------------------')
// Задание 3️⃣

// Напишите функцию calculateNumbersSum(numbers), которая на вход принимает массив чисел и возвращает сумму этих чисел. 
// Например, calculateNumbersSum([0, 1, 2, 4, 8] возвращает 15.

// const numbers = [];

// function calculateNumbersSum(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//         console.log(sum)
//     }

//     return numbers;
// };

// calculateNumbersSum([3, 5, 10, 56]);

console.log('-----------------------------')
// Задание 4️⃣

// Напишите функцию includes(numbers, number), которая на вход принимает массив чисел и число. 
// Если число есть в массиве чисел, функция возвращает true, иначе - false.

const numbers = [];

function includes(numbers, number) {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === number) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(includes([3], 4));


console.log('-----------------------------');
// Задание 5️⃣

// Напишите функцию createPerson(name, surname, age). 
// Функция принимаем имя человека, фамилию и возраст. 
// Функция возвращает объект с полями name, surname, age.

function createPerson({name, surname, age}) {
    return {
        name,
        surname,
        age,
        getName: function() {
            return this.name
        },
        getSurName: function() {
            return this.surname
        },
        getAge: function() {
            return this.age
        },
        buildText: function() {
            return `Привет я ${this.getName()} ${this.getSurName()} мне ${this.age}`;
        }
    }
}

const myPerson = createPerson ({
    name: 'Victor',
    surname: 'Golovin',
    age: 28
});

console.log(myPerson.buildText());


console.log('-----------------------------');
// Задание 6️⃣

// Напишите функцию findOldest(people). 
// Функция принимает массив из объектов. 
// Каждый объект создайте через функцию createPerson. 
// Функция возвращает имя самого старшего человека.

const people = [
    createPerson({ name: 'Victor', surname: 'Golovin', age: 28}),
    createPerson({ name: 'Denis', surname: 'Ribakov', age: 25}),
    createPerson({ name: 'Alina', surname: 'Osipova', age: 35}),
    createPerson({ name: 'Alex', surname: 'Ivanov', age: 45}),
];

const maxAgeIndex = findOldest(people);

console.log(buildText({
    name: people[maxAgeIndex].getName(),
    age: people[maxAgeIndex].getAge()
}));


function findOldest(people) {
    let index = 0;
    let maxAge = people[0].getAge();

    for (let i = 0; i < people.length; i++) {
        if (people[i].getAge() >= maxAge) {
            maxAge = people[i].getAge();
            index = i;
        };
    };

    return index;
};

function getAge() {
    return this.age
};

function buildText ({ name, age }) {
    return `${name} самый мудрый, ему ${age}`;  
};