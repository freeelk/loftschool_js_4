let array = [1, 2, 3, 4, 5, 6];

let array1 = [1,,,, 2,, 3,,4,, 5, 6];
console.log(array1);


let res = reduce(array, reduceCallback);
console.log(res);
res = reduce(array, reduceCallback, 10);
console.log(res);

function reduceCallback(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}

function reduce(array, callback, initialValue) {
  if (array === undefined) {
    throw new Error('Не передан первый аргумент - массив');
  }

  if (callback === undefined) {
    throw new Error('Не передан второй аргумент - функция');
  }

  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Пустой массив и нет начального значения');
  }

  //TODO: обработка пустот в массиве
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
