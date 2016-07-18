let array = [1, 2, 3, 4, 5, 6];

let res = splice(array, 3, 2);
console.log(res);


function splice(array, start, deleteCount) {
  let $result = [];
  
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
  
  for (let i=0;i<start;i++) {
      result[result.length] = array[i];
    }  
  }

  for (let i=2;i<arguments.length;i++) {
      result[result.length] = arguments[i];
    }  
  }

  for (let i=stop;i<array.lenght;i++) {
      result[result.length] = array[i];
    }  
  }

  return result;  
  
}