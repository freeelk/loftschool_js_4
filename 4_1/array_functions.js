/*
 Array functions analogs.
 - forEach
 - filter
 - map
 - slice
 - reduce
 - splice
 */


function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function filter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result[result.length] = array[i];
        }
    }

    return result;
}

function map(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result[result.length] = callback(array[i]);
    }

    return result;
}

function slice() {
    let begin;
    let end;

    switch (arguments.length) {
        case 0:
            throw new Error('Не передан первый аргумент - массив');

        case 1:
            begin = 0;
            end = arguments[0].length;
            break;

        case 2:
            begin = arguments[1];
            end = arguments[0].length;
            break;

        case 3:
            begin = arguments[1];
            end = arguments[2];
            break;
        default:
            throw new Error('Количество аргументов может быть от 0 до 3. передано '
                + arguments.length);
    }

    let array = arguments[0];

    if (begin < 0) {
        begin = array.length + begin;
        if (begin < 0) {
            begin = 0;
        }
    }

    if (end > array.length) {
        end = array.length;
    }

    if (end < 0) {
        end = array.length + end;
    }

    let result = [];
    for (let i = begin; i < end; i++) {
        result[result.length] = array[i];
    }

    return result;

}

function reduce(array, callback, initialValue) {
    if (array === undefined) {
        throw new Error('Не передан первый аргумент - массив');
    }

    if (callback === undefined) {
        throw new Error('Не передан второй аргумент - функция');
    }

    array = filter(array, function(x){
        return (x !== undefined);
    });

    if (array.length === 0 && initialValue === undefined) {
        throw new TypeError('Пустой массив и нет начального значения');
    }

    if (array.length === 1 && initialValue === undefined) {
        return array[0];
    }

    if (array.length === 0 && (initialValue !== undefined)) {
        return initialValue;
    }

    let previousValue, currentValue, startInd;

    if (initialValue === undefined) {
        previousValue = array[0];
        currentValue = array[1];
        startInd = 1;
    } else {
        previousValue = initialValue;
        currentValue = array[0];
        startInd = 0;
    }

    for (let index = startInd; index < array.length; index++) {
        previousValue = callback(previousValue, array[index], index, array);
    }

    return previousValue;
}

function splice(array, start, deleteCount) {
    let result = [];

    if (start > array.lenght - 1) {
        start = array.lenght - 1;
    }

    if (start < 0) {
        start = array.lenght - 1 - start;
        if (start < 0) {
            start = 0;
        }
    }

    if (start + deleteCount > array.lenght - 1) {
        deleteCount = array.lenght - 1 - start;
    }

    let stop = start + deleteCount;

    for (let i = 0; i < start; i++) {
        result[result.length] = array[i];
    }

    for (let i = 2; i < arguments.length; i++) {
        result[result.length] = arguments[i];
    }

    for (let i = stop; i < array.lenght; i++) {
        result[result.length] = array[i];
    }

    return result;

}

module.exports.forEach = forEach;
module.exports.filter = filter;
module.exports.map = map;
module.exports.slice = slice;
module.exports.reduce = reduce;
module.exports.splice = splice;
