// ОБЪЕКТЫ

// Объявление объекта

const person = {
    name: 'Victor', // свойста объекта
    surname: 'Golovin',
    age: 29,
    city: 'Khabarovsk',
                    // ниже методы объекта
    getFullName: function() {  // в объекте можем обьявить функцию (getFullName имя функции)
        return `${this.name} ${this.surname}`; // this позволяет обратится внутри метода объекта к его свойстам
    },
    sayHi: function() { // второй пример
        console.log(`hi! my name: ${this.name} ${this.surname}`);
    },
    isAdult: function() {
        return this.age >= 18; // можем сделать проверку boolyan
    }
};

person.sayHi() // обращение к функции внтури объекта

console.log(person.isAdult());

console.log(person.name); // через . мы можем обратится к объекту


const people = [       // Массив с объектами
    {
    name: 'Victor',
    surname: 'Golovin',
    age: 29,
    city: 'Khabarovsk'
    }, 
    {
    name: 'Vasya',
    surname: 'Orlov',
    age: 25,
    city: 'Dubai'
    }
];

people.forEach(man => {   // перебор массива, man это название элемента которое мы задали
    console.log(man.name, man.age); // обращение к свойстам объекта
});

// Поля объекта


// Методы объекта


// Массив объекта


// Перебор массивов объекта