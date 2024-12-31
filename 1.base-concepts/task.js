"use strict";

function solveEquation(a, b, c) {
  // Вычисляем дискриминант
  const discriminant = b ** 2 - 4 * a * c;

  // Если дискриминант меньше нуля, корней нет
  if (discriminant < 0) {
    return [];
  }

  // Если дискриминант равен нулю, один корень
  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  // Если дискриминант больше нуля, два корня
  const sqrtDiscriminant = Math.sqrt(discriminant);
  const root1 = (-b + sqrtDiscriminant) / (2 * a);
  const root2 = (-b - sqrtDiscriminant) / (2 * a);
  return [root1, root2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем процентную ставку из диапазона 0-100 в 0-1 и вычисляем месячную ставку
  const monthlyRate = percent / 100 / 12;

  // Вычисляем тело кредита
  const loanBody = amount - contribution;

  // Если тело кредита меньше или равно 0, возвращаем 0 (ничего платить не нужно)
  if (loanBody <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платеж по формуле
  const monthlyPayment =
    loanBody *
    (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));

  // Общая сумма выплат
  const totalAmount = monthlyPayment * countMonths;

  // Округляем результат до двух знаков после запятой и возвращаем
  return +totalAmount.toFixed(2);
}

// Примеры использования:
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
