// СТРОКИ


// Создание строки
const name = 'Victor';

console.log(name);

const surname = "Golovin";

console.log(surname);
// '' или ""


// Объединение строк (конкатенация)
const fullName ='Имя Фамилия: ' + name + ' ' + surname;

console.log(fullName);

// Шаблонные строки
const fullNameNew = `ФИО: ${name} ${surname}`;


console.log(fullNameNew);

// Длина строки
const myNameLength = fullNameNew.length;

console.log(myNameLength);