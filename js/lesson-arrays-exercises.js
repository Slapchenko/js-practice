//? ## Example 1 - Базові операції з масивом

// 1. Створити масив з елементами 'Jazz' и 'Blues'
const genres = ['Jazz', 'Blues'];
// console.log(genres);

// 2. Додати 'Rock' в кінець масиву.

genres.push('Rock');
// console.log(genres);

// 3. Вивести в консоль перший елемент масива (не видаляючи його)

// console.log(genres[0]);

// 4. Вивести в консоль останній элемент масива. Має працювати для будь-якої довжини.

// console.log(genres[genres.length - 1]);

// 5. Видалити з масиву перший елемент і вивести в консоль.
genres.shift(1);
// console.log(genres);

//  6. Додати «Country» і «Reggy» в початок масиву (зберегти порядок).
genres.unshift('Country', 'Reggy');
// console.log(genres);

//? ## Example 2 - Масиви і строки
/* 
Написати скрипт для обчислення площі прямокутника зі сторонами, довжину яких
отримуємо у змінній `sides` у вигляді строки.
Значення гарантовано розділені одним пробілом
*/

const sides = '7 10';
const stringtoArray = sides.split(' ');
const areaСalculation = stringtoArray[0] * stringtoArray[1];
// console.log('Area:', areaСalculation);

//TODO ## Example 3 - Перебор масивів, умови
/*
 * Написати скрипт для перебору масива `fruits` циклом `for`.
 * Для кожного элементу вивести в консоль строку формата `номер_елемента: значення_элемента`.
 * Нумерациія має починатись з `1`.
 */

// ускладнення - НЕ виводити в консоль дані якщо фрукти містяться в масиві fruitsToIgnore
// const fruitsToIgnore = ['🍌', '🍋'];

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
const fruitsToIgnore = ['🍌', '🍋'];

for (let i = 0; i < fruits.length; i += 1) {
  if (fruitsToIgnore.includes(fruits[i])) {
    continue;
  }

  // console.log(`${i + 1}: ${fruits[i]}`);
}

//? ## Example 4 - Масиви і цикли
/*
Написати скрипт що виводить в консоль ім'я і телефон користувачів.
У змінних `names` і `phones` зберігаються строки імен і телефонних номерів,
розділені комами.
Порядок імен відповідає порядку номерів.
Кількість імен и телефонів гарантовано однакова.
  - Обрати зручний формат
*/

const names = 'Jacob,William,Solomon,Nicolas';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesSplittoArray = names.split(',');
const phonesSplittoArray = phones.split(',');

for (let i = 0; i < namesSplittoArray.length; i += 1) {
  const name = namesSplittoArray[i];
  const phone = phonesSplittoArray[i];

  // console.log(`Name: ${name}, phone: ${phone}`);
}

// ? Масиви і строки
//? ## Example 5
/*
Написати скрипт що виводить в консоль задану фразу без першого і останнього слів.
Фінальна строка не має починатись чи закінчуватись пробілом.
Скрипт має працювати для будь-якої строки.
*/

// const phrase = 'Welcome to the bright future';
// const phrasetoArray = phrase.split(' ');
// phrasetoArray.pop();
// phrasetoArray.shift();
// const cutPhrase = phrasetoArray.join(' ');

// console.log(cutPhrase);

//? ## Example 6
/*
Написати скрипт який «розверне» строку (зворотній порядок літер) і виведе в консоль.
Три варіанти - цикл for (без масивів), цикл for-of + масиви, без циклів?
*/

// v1 цикл for (без масивів)
// const phrase = 'Welcome to the future';
// let reversed = '';

// for (let i = phrase.length - 1; i >= 0; i--) {
//   const item = phrase.charAt(i);

//   reversed += item;
// }

// console.log(reversed);

// v2 for-of + масиви
// const phrase = 'Welcome to the future';
// const chars = phrase.split('');
// const reversedArray = [];

// for (let item of chars) {
//   reversedArray.unshift(item);
// }

// const reversed = reversedArray.join('');

// console.log('reversed:', reversed);

// v3 - reverse!
// const chars = phrase.split('');
// const reversed = chars.reverse().join('');

// console.log('reversed:', reversed);

//? ## Example 7 - Пошук елемента
/*
Написати скрипт пошуку найменшого числа в массиве. Чи є варіанти?
*/

//v1
// const numbers = [2, 17, 94, 1, 23, 37];
// const test = Math.min(...numbers);

//v2
// const numbers = [2, 17, 94, 1, 23, 37];
// let minNumber = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < minNumber) {
//     minNumber = numbers[i];
//   }
// }

// console.log('minNumber', minNumber);

//? ## Example 8 - Сортування масива с циклом
/*
Написати скрипт сортування масиву строк в алфавітному порядку.
*/

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'ada'];
