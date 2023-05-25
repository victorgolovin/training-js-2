// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// И &&

const isHomeWorkDone = true;
const isRoomClean = true;

// Могу я идти на вечеринку = если домашка сделана И комната чиста
const canGoParty = isHomeWorkDone && isRoomClean; // true && true 

console.log(canGoParty);

// ИЛИ ||

const isHomeWorkDone2 = true;
const isRoomClean2 = false;

const canGoParty2 = isHomeWorkDone2 || isRoomClean2; 

console.log(canGoParty2);


// НЕ !

const isHomeWorkDone3 = true;
const isRoomDirty = true;

const canGoParty3 = isHomeWorkDone3 || !isRoomDirty; 

console.log(canGoParty3);

// Комбенирование операторов

const isHomeWorkDone4 = true;
const isRoomDirty2 = true;
const isFatherAllow = false;

const canGoParty4 = (isHomeWorkDone || !isRoomClean) && isFatherAllow; 

console.log(canGoParty4);