// Задача 1
console.log("Домашнее задание к занятию 2 Функции");
console.log("\n  Задача №1 Исследовать массив");

function getArrayParams(...arr) {
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

  const avg = +(sum / arr.length).toFixed(2);
  return { max: max, min: min, avg: avg };
}

// Пример использования:
console.log(
  getArrayParams(-99, 99, 10),
  "expect { min: -99, max: 99, avg: 3.33"
);
console.log(
  getArrayParams(1, 2, 3, -100, 10),
  "expect { min: -100, max: 10, avg: -16.80"
);
console.log(getArrayParams(5), "expect { min: 5, max: 5, avg: 5");

// Задача 2
console.log(" \n Задача №2 Насадки преобразователи");
// 1.Находим находить сумму элементов массива и возвращаем её

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2.Находим разницы максимального и минимального элементов

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
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

// Пример использования
// summElementsWorker
console.log("  Насадка суммирования элементов");
console.log("[ ] =>", summElementsWorker());
console.log("[10, 10, 11, 20, 10] =>", summElementsWorker(10, 10, 11, 20, 10));

// differenceMaxMinWorker
console.log(
  "  Насадка вычисления разницы максимального и минимального элементов"
);
console.log("[ ] =>", differenceMaxMinWorker());
console.log(
  "[10, 10, 11, 20, 10] => 20 - 10 =>",
  differenceMaxMinWorker(10, 10, 11, 20, 10)
);

// differenceEvenOddWorker
console.log("  Насадка вычисления разницы сумм четных и нечетных элементов");
console.log(
  "[94, 51, 57, 41, 47, 66, 58, 10, 38, 17] => 266 - 213 =>",
  differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)
);
console.log(
  "[15, 97, 85, 64, 67, 10, 69, 40, 15, 35] => 114 - 383 =>",
  differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)
);

// averageEvenElementsWorker
console.log("  Насадка вычисления среднего значения элементов");
console.log(
  "[1, 2, 3, 4, 5, 6, 7, 8, 9] => [2, 4, 6, 8] =>",
  averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)
);
console.log(
  "[15, 97, 85, 64, 67, 10, 69, 40, 15, 35] => [64, 10, 40] =>",
  averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)
);

// Задача 3
console.log("\n Задача №3 Агрегатор преобразователей");

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    console.log("result:", result);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

// Примеры использования
const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62],
];
console.log("Насадка суммирования значений");
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log("Насадка разницы элементов");
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log("Насадка разницы четных и нечетных элементов");
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log("Насадка среднего значения четных элементов");
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
