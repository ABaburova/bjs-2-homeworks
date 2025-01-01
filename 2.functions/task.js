// Задача 1

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { max: null, min: null, avg: null };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { max: max, min: min, avg: avg };
}

// Пример использования:
const result1 = getArrayParams(1, 2, 5, 9, 10);
console.log(result1); // Вывод: { max: 10, min: 1, avg: 5,4 }

const result2 = getArrayParams(-1, -2, -5, -9, -10);
console.log(result2); // Вывод: { max: -1, min: -10, avg: -5,4 }

const result3 = getArrayParams(1);
console.log(result3); // Вывод: { max: 1, min: 1, avg: 1 }

// Альтернативный вариант с Math.max, Math.min и reduce
function getArrayParamsAlternative(...arr) {
  if (arr.length === 0) {
    return { max: null, min: null, avg: null };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { max: max, min: min, avg: avg };
}

console.log("Альтернативный вариант:");
const result4 = getArrayParamsAlternative(1, 2, 5, 9, 10);
console.log(result4); // Вывод: { max: 10, min: 1, avg: 5,4 }

const result5 = getArrayParamsAlternative(-1, -2, -5, -9, -10);
console.log(result5); // Вывод: { max: -1, min: -10, avg: -5,4 }

const result6 = getArrayParamsAlternative(1);
console.log(result6); // Вывод: { max: 1, min: 1, avg: 1 }

// Задача 2

// 1.Находим находить сумму элементов массива и возвращаем её

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2.Находим разницы максимального и минимального элементов

function diffMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

// 3.Находим разницы сумм чётных и нечётных элементов

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

// 4.Находим среднее значение чётных элементов

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) return 0;
  return +(sumEvenElement / countEvenElement).toFixed(2);
}

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38
