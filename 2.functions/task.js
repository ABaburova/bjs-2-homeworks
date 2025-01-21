//Задача 1
console.log("Задача № 1. Печатное издание.");

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    if (this._state > 0 && this._state < 100) {
      this._state *= 1.5;

      if (this._state > 100) {
        this._state = 100;
      }
    }
  }
}

// Пример использования
const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}


class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Пример использования
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); // 10
picknick.fix();
console.log(picknick.state); // 15

// Задача 2
console.log("Задача № 2. Библиотека.");

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
        return 0;
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || 0;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }
        return 0;
    }
}

// Пример использования:
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи: 3

// Создание библиотеки
const myLibrary = new Library("Моя библиотека");

// Добавление книг разных типов
const book1 = new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const book2 = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
const book3 = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138);
const book4 = new Magazine("Мурзилка", 1924, 60);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

// Попытка найти книгу, изданную в 1919 году
let book1919 = myLibrary.findBookBy("releaseDate", 1919);
if (!book1919) {
    book1919 = new DetectiveBook("Unknown", "Mystery of 1919", 1919, 60);
    myLibrary.addBook(book1919);
    return 0;
}

// Выдача книги
const issuedBook = myLibrary.giveBookByName("Пикник на обочине");
console.log("Выдана книга:", issuedBook.name);

// Повреждение выданной книги
issuedBook.state = 20; // Например, состояние 20 из 100
console.log("Книга повреждена. Новое состояние:", issuedBook.state);

// Восстановление книги
issuedBook.state = 50; // Восстанавливаем состояние до 50
console.log("Книга восстановлена. Новое состояние:", issuedBook.state);

// Попытка добавить восстановленную книгу обратно в библиотеку
myLibrary.addBook(issuedBook); // Полезно проверить, добавится ли книга
if (myLibrary.books.includes(issuedBook)) {
    console.log("Книга успешно добавлена обратно в библиотеку.");
} else {
    console.log("Книгу не удалось добавить обратно в библиотеку.");
}