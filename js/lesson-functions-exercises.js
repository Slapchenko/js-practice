//? ## Example 0 - Логування контактів
/*
Створити функцію `printContactsInfo(names, phones)` яка виведе в консоль им'я і телефон
користувача. В параметри `names` і `phones` очікуються строки імен і номеров,
розділені комами.
Порядковий номер імені і телефона вказує на відповідність
Кількість імен і телефонів гарантовано однакова
*/

// function printContactsInfo(names = '', phones = '') {
//   const nameList = names.split(',');
//   const phonesList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     const name = nameList[i];
//     const phone = phonesList[i];
//     console.log(`name: ${name}; phone: ${phone};`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Nicolas',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// ускладнення - а якщо кількість не однакова?
// function printContactsInfo(names = '', phones = '') {
//   const arrayOfNames = names.split(',');
//   const arrayOfPhones = phones.split(',');
//   const noPhone = 'no-phone';

//   for (let i = 0; i < arrayOfNames.length; i += 1) {
//     const name = arrayOfNames[i];
//     const phone = arrayOfPhones[i];
//     console.log(`name: ${name}; phone: ${phone || noPhone};`);
//   }
// }
// printContactsInfo('Jacob,William,Solomon,Nicolas', '89001234567,89001112233,890055566377');

//? ## Example 1 - Площа прямокутника
/*
Написати функцію `getRectangleArea(dimensions)`  для обчислення прощі прямокутника
зі сторонами, значения яких отримуємо в параметр `dimensions` у вигляді строки.
Значення гарантовано розділені пробілом.
*/

// function getRectangleArea(sizes) {
//   const arrayofSizes = sizes.split(' ');
//   const sideA = arrayofSizes[0];
//   const sideB = arrayofSizes[1];
//   const calculatedArea = sideA * sideB;

//   return calculatedArea;
// }

// const area = getRectangleArea('8 11');
// console.log(`Rect area is ${area}`);

//? ## Example 2 - Найменше з чисел

// Написати функцію `min(a, b)`, яка повертає найменше з чисел `a` и `b`.

// function min(a, b) {
//   const minNumber = Math.min(a, b);

//   return minNumber;
// }

// console.log(min(1.5, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(1, 1)); // 1

//? ## Example 3 - Пошук найбільшого елемента
/*
Написати функцію `findLargestNumber(numbers)` яка повертає найбільше значення
із переданого масиву.
*/

// function findLargestNumber(numbers = []) {
//   const maxNumber = Math.max(...numbers);

//   return maxNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//? ## Example 4 - Середнє значення
/*
Написати функцію `getAverage()` що приймає будь-яку кількість аргументів
і повертає їх середнє значення. Всі аругменти - тільки числа.
*/

// function getAverage(...args) {
//   if (args.length === 0) {
//     console.warn('no arguments set');
//     return null;
//   }

//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }

//   return total / args.length;
// }

// console.log(getAverage(1, 2, 3, 4)); // 2.5
// console.log(getAverage(14, 8, 2)); // 8
// console.log(getAverage(27, 43, 2, 8, 36)); // 23.2
// console.log(getAverage()); // ???

//? ## Example 5 - обчислення індексу маси тіла (BMI body mass index)
/*
Написати функцію `calcBMI(weight, height)` що розраховує і повертає
індекс маси тіла людини. Для цього необхідно розділити вагу в кг
на квадрат висоти людини в метрах.

Вага і зріст будуть передаватись у вигляді строк. Дробні числа можуть бути
задані як `24.7` або `24,7`, тобто десятичний розділювач або точка або кома.

Індекс маси необхідно округлити до однієї цифри після коми (до десятих)
*/

// function calcBMI(weight = '', height = '') {
//   const normalizWeight = weight.replaceAll(',', '.');
//   const normalizHeight = height.replaceAll(',', '.');
//   const squaringHeight = normalizHeight * normalizHeight;
//   const calcBMI = Number(normalizWeight) / Number(squaringHeight);

//   return calcBMI.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log('bmi', bmi); // 28.8

//? ## Example 6 - Коллекция курсов (includes, indexOf, push и т. д.)
/*
Написати функції для роботи з колекцією навчальних курсов `courses`:

- `addCourse(name)` - добавляет курс в конец коллекции
- `removeCourse(name)` - удаляет курс из коллекции
- `updateCourse(oldName, newName)` - изменяет имя на новое
*/

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// 1 - addCourse
function addCourse(courseName = '') {
  for (const course of courses) {
    if (course === courseName) {
      console.warn(`${courseName} - Такий курс вже існує`);
      return courses;
    }
  }
  courses.push(courseName);
  return courses;
}

console.log('--- addCourse', addCourse('Express'));
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

addCourse('CSS'); // має вивести ворнінг 'Такий курс вже існує'

// 2 - removeCourse
console.log('--- removeCourse');
function removeCourse(courseName = '') {
  for (let i = 0; i < courses.length; i += 1) {
    if (courses[i] === courseName) {
      courses.splice(i, 1);
      return courses;
    }
  }

  console.warn(`Курс з назвою ${courseName} не знайдено`);
  return courses;
}

console.log(removeCourse('React'));
//['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express'];

removeCourse('Vue'); // ворнінг 'Курс з назвою %назва_курсу% не знайдено'

// 3 - updateCourse
console.log('--- updateCourse');
function updateCourse(oldName = '', newName = '') {
  for (let i = 0; i < courses.length; i += 1) {
    if (courses[i] === oldName) {
      courses.splice(i, 1, newName);
      return courses;
    }
  }

  console.warn(`Курс з назвою ${courseName} не знайдено`);
  return courses;
}

updateCourse('Express', 'NestJS');
console.log(courses);
['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS'];
