// МАССИВЫ

// Объявление массива


const myname = 'Rin';
const names = ['Victor', 'Dima', 'Joe', myname];

console.log(names);

// Чтение данных массива

console.log(names[0]); // обращение к номеру элемента массива (начинается с 0)
console.log(names.length); // длина массива length

// Проход по элементам массива
// for и foreach

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    
    console.log(name)
}


const items = ['Светильник', 'юр адрес', 'попугай']; // 1 обьявляем массив 

printItems(items)

function printItems(items) { // 2 создаем функцию в скобки ставим имя массива 
    for (let i = 0; i < items.length; i++) { // 3 пробегаемся по массиву 
        const item = items[i];
        
        alert(item);
    }
}

// второй вариант

const items2 = ['Светильник', 'юр адрес', 'попугай']; // 1 обьявляем массив 

printItems(items2)

function printItems(items2) { 
    items2.forEach(function(item2, i){ // forEach - для каждого элемента 
        console.log(item2, i);
   });
}



// Поиск элемента массива

const items3 = ['Светильник', 'юр адрес', 'попугай'];

const parrotIndex = getParrotIndex(items3);

console.log(items[parrotIndex])

function getParrotIndex(items3) { 
    let parrotIndex = null;

    items3.forEach(function(item3, i) {  // находим элемент попугая из массива
        if (item3 === 'попугай') {
            parrotIndex = i;
        }
   });

   return parrotIndex; // возвращаем что нашли
}