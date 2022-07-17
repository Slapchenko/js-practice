// 1. РАННИЙ ВОЗВРАТ
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if () { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// console.log(checkAge(17));

/* 2. ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ (РАННИЙ ВОЗВРАТ)
Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
} */

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!';
// }

// console.log(checkPassword(`jqueryismyjam`));

/* 3. ЗАДАЧА: СКЛАД ТОВАРОВ 3.0
Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
} */

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(100, 0));

/* 4. СОЗДАНИЕ МАССИВА
Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange". */

// const fruits = [`apple`, `plum`, 'pear', 'orange'];
// console.table(fruits);

/* 5. ДОСТУП К ЭЛЕМЕНТАМ ПО ИНДЕКСУ
Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

Имя переменной	Значение переменной
firstElement	первый элемент массива
secondElement	второй элемент массива
lastElement	последний элемент массива

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line */

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement, secondElement, lastElement);

/* 6. ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ЭЛЕМЕНТА
Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line */

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = `peach`;
// fruits[3] = `banana`;

// console.table(fruits);

/* 7. ДЛИНА МАССИВА
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line */

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

/* 8. ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА
Объяви две переменные:

Имя переменной	Ожидаемое значение
lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
lastElement	Значение последнего элемента массива

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line */

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.table(fruits);
// console.log(lastElementIndex);
// console.log(lastElement);

/* 9. ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  // Change code below this line


  // Change code above this line
} */

// Вариант решения №1
// function getExtremeElements(...array) {
//   const newArray = [array[0], array[array.length - 1]];
//   return newArray;
// }

// console.log(getExtremeElements(`1`, `2`, `3`, `4`, `5`));

// Вариант решения №2
// function getExtremeElements(...array) {
//   const newArray = [];
//   newArray.push(array[0], array[array.length - 1]);
//   return newArray;
// }

// console.log(getExtremeElements(`1`, `2`, `3`, `4`, `5`));

// Вариант решения №3
// function getExtremeElements(...array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(`1`, `2`, `3`, `4`, `5`));
