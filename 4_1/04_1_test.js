/*написать модуль, который экспортирует аналоги методов для работы с массивами:
forEach, filter, map, slice, reduce, splice  пример:

let array = [1, 2, 3, 4, 5, 6];
forEach(array, item => console.log(item));
let greaterThan4 = filter(array, item => item > 4);
let square = map(array, item => item*item);

Реализация функции splice является задачей со звездочкой.
Ее выполнение не обязательно, но желательно.

Внимание:
 в данном задании запрещено использовать встроенные методы для работы с массивами! Разрешено использовать стандартные 
операторы 'for/for-in/while/if`' (и т.д.) и свойство 'length'
*/

let arrayFunctions = require('./array_functions.js');

let array = [1, 2, 3, 4, 5, 6];

console.log('forEach -------------------');
arrayFunctions.forEach(array, item => console.log(item));

console.log('filter -------------------');
let greaterThan4 = arrayFunctions.filter(array, item => item > 4);
console.log(greaterThan4);

console.log('map -------------------');
let sqare = arrayFunctions.map(array, item => item*item);
console.log(sqare);

console.log('slice -------------------');
console.log(arrayFunctions.slice(array, 2, 5));

console.log('reduce -------------------');
function reduceCallback(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
}

console.log(arrayFunctions.reduce(array, reduceCallback, 10));

console.log('splice -------------------');
console.log(arrayFunctions.splice(array, 3, 2));