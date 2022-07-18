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

/* 10. МЕТОД СТРОК SPLIT()
Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line

  // Change code above this line
  return words;
} */

// Решение:
// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);

//   return words;
// }

// console.log(splitMessage(`message`, ''));

/* 11. ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line



   // Change code above this line
} */

// !Решение 1:
// function calculateEngravingPrice(message, pricePerWord) {
//   const totalWords = message.split(' ').length;
//   const totalEngravingCost = totalWords * pricePerWord;
//   return totalEngravingCost;
// }

// console.log(calculateEngravingPrice(`message message message`, 10));

// !Решение 2:
// function calculateEngravingPrice(message, pricePerWord) {
//   const totalEngravingCost = message.split(' ').length * pricePerWord;
//   return totalEngravingCost;
// }

// console.log(calculateEngravingPrice(`message message message`, 10));

/* 12. МЕТОД МАССИВА JOIN()
Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line



  // Change code above this line
  return string;
} */

// !Решение:
// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);

//   return string;
// }

// console.log(makeStringFromArray(['Hello', 'world'], ' '));

/* 13. ЗАДАЧА: ГЕНЕРАТОР SLUG
Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире

function slugify(title) {
  // Change code below this line



  // Change code above this line
} */

// !Решение 1:
// function slugify(title) {
//   const titleToLowerCase = title.toLowerCase();
//   const titleToArray = titleToLowerCase.split(' ');
//   const arrayToString = titleToArray.join('-');
//   return arrayToString;
// }

// console.log(slugify('Arrays for begginers'));

// !Решение 2:
// function slugify(title) {
//   const resultSlugify = title.toLowerCase().split(' ').join('-');
//   return resultSlugify;
// }

// console.log(slugify('Arrays for begginers'));

/* 14. МЕТОД SLICE()
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = ;
const nonExtremeEls = ;
const lastThreeEls = ; */

// !Решение:
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.table(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

/* 15. МЕТОД CONCAT()
Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = ; // Change this line */

// !Решение:
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

/* 16. ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line



    // Change code above this line
  } */

// !Решение:
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (maxLength >= newArray.length) {
//     return newArray;
//   }
//   return newArray.slice(0, maxLength);
// }

// console.log(makeArray(['1', '2', '3', '4', '5'], ['6', '7', '8', '9', '10'], 5));

/* 17. ЦИКЛ FOR
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

const start = 3;
const end = 7;

for (let i = ; i <= ; i += ) { // Change this line
  console.log(i);
} */

// !Решение:
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

/* 18. ЗАДАЧА: СУММА ЧИСЕЛ(ЦИКЛ FOR)
Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
 // Change code below this line



  // Change code above this line
} */

// !Решение:
// function calculateTotal(number) {
//   let totalNumber = 0;

//   for (let i = 0; i <= number; i += 1) {
//     totalNumber += i;
//   }

//   return totalNumber;
// }

// console.log(calculateTotal(10));

/* 19. ИТЕРАЦИЯ ПО МАССИВУ
Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = ;) { // Change this line
  const fruit = fruits[]; // Change this line
  console.log(fruit);
} */

// !Решение:
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];

//   console.log(fruit);
// }

/* 20. ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // Change code above this line
  return total;
} */

// !Решение:
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]));

/* 21. ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  // Change code below this line



  // Change code above this line
} */

// !Решение:
// function findLongestWord(string) {
//   const stringToArray = string.split(' ');
//   let longestWord = stringToArray[0];

//   for (let i = 0; i < stringToArray.length; i += 1) {
//     if (stringToArray[i].length > longestWord.length) {
//       longestWord = stringToArray[i];
//     }
//   }

//   return longestWord;
// }

// console.log('Результат возврата:', findLongestWord('this is the longest word'));

/* 22. МЕТОД PUSH()
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  // Change code above this line
  return numbers;
} */

// !Решение:
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 10));

/* 23. ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ
Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
   // Change code below this line



  // Change code above this line
} */

// !Решение:
// function filterArray(numbers, value) {
//   const numbersArray = [];

//   for (const number of numbers) {
//     if (number > value) {
//       numbersArray.push(number);
//     }
//   }

//   return numbersArray;
// }

// console.log('Result:', filterArray([12, 24, 8, 41, 76], 38));

/* 24. МЕТОД INCLUDES()
Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return; // Change this line
} */

// !Решение:
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit);
// }

// console.log(checkFruit('apple'));

/* 25. ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  // Change code below this line



 // Change code above this line
} */

// !Решение:
// function getCommonElements(array1, array2) {
//   const commonArrayElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       commonArrayElements.push(element);
//     }
//   }

//   return commonArrayElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
