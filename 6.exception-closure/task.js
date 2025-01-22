class Triangle {
    constructor(a, b, c) {
        // Проверяем условия существования треугольника
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        // Присваиваем значения сторон
        this.a = a;
        this.b = b;
        this.c = c;
    }
 
    get perimeter() {
        // Возвращаем периметр треугольника
        return this.a + this.b + this.c;
    }
 
    get area() {
        // Вычисляем полупериметр
        const s = this.perimeter / 2;
        // Используем формулу Герона для расчета площади
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        // Округляем до трех знаков после запятой
        return Math.round(area * 1000) / 1000;
    }
}
 
function getTriangle(a, b, c) {
    try {
        // Пытаемся создать новый объект треугольника
        return new Triangle(a, b, c);
    } catch (error) {
        // В случае ошибки возвращаем объект с геттерами
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
 
// Пример использования:
 
const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter); // 12
console.log(triangle1.area); // 6
 
const triangle2 = getTriangle(1, 2, 3);
console.log(triangle2.perimeter); // "Ошибка! Треугольник не существует"
console.log(triangle2.area); // "Ошибка! Треугольник не существует"