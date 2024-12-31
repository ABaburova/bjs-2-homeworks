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
