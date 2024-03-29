// TODO 1. СОЗДАНИЕ ОБЪЕКТА
/* Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"]. */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// console.log(apartment);

// TODO 2. ВЛОЖЕННЫЕ СВОЙСТВА
/* Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com". */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// console.log(apartment);

// TODO 3. ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ ТОЧКУ
/* Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги. */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(apartment);
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// TODO 4. ДОСТУП К ВЛОЖЕННЫМ СВОЙСТВАМ
/* Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags. */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(apartment);

// TODO 5. ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ
/* Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги. */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating, aptDescr, aptPrice, aptTags);

// TODO 6. ИЗМЕНЕНИЕ ЗНАЧЕНИЯ СВОЙСТВА
/* Дополни код обновив значения свойств объекта apartment:
цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted". */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment);

// TODO 7. ДОБАВЛЕНИЕ СВОЙСТВ
/* Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston". */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// console.log(apartment);

// TODO 8. КОРОТКИЕ СВОЙСТВА
/* Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств. */

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product);

// TODO 9. ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
/* Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam". */

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// console.log(credentials);

// TODO 10. ЦИКЛ FOR...IN
/* Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств. */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// TODO 11. МЕТОД HASOWNPROPERTY()
/* Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство. */

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(apartment);

// TODO 12. ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ
/* Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта. */

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// TODO 13. МЕТОД OBJECT.KEYS()
/* Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств. */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// TODO 14. ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0
/* Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of. */

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);

//   propCount = keys.length;

//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// TODO 15. МЕТОД OBJECT.VALUES()
/* Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values(). */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys, values);

// TODO 16. ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ
/* Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты. */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salaryList = Object.values(salaries);

//   for (const salary of salaryList) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// TODO 17. МАССИВ ОБЪЕКТОВ
/* Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors. */

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors, rgbColors);

// TODO 18. ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
/* Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null. */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   const productPrice = null;

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return productPrice;
// }

// console.log('Product price:', getProductPrice('Scanner'));

// TODO 19. ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА
/* Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив. */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propValue = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValue.push(product[propName]);
//     }
//   }

//   return propValue;
// }

// console.log(getAllPropValues('name'));

// TODO 20. ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА
/* Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products. */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }

//   return totalPrice;
// }

// console.log(calculateTotalPrice('Grip'));

// TODO 21. ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
/* Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures. */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// TODO 22. ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ
/* В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

//TODO 23. ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ
/* Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

// TODO 24. ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
/* Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта.. */

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// TODO 25. ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ
/* Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },

//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// TODO 26. ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»
/* Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast. */

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })
// );

// TODO 27. ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ
/* В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий. */

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log('BestScore:', bestScore, 'WorstScore:', worstScore);

// TODO 28. ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА
/* В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл. */

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// TODO 29. ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА
/* В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста. */

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// TODO 30. ЗАДАЧА. КАРТОЧКИ ЗАДАЧ
/* Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных. */

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   const defObject = {
//     completed,
//     category,
//     priority,
//   };

//   const newObject = { ...defObject, ...data };

//   return newObject;
// }

// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));

// TODO 31. ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
/* Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму. */

// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// }

// console.log(add(15, 27));

//TODO 32. ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ
/* Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции. */

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNumber < arg) total += arg;
//   }

//   return total;
// }

// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// TODO 33. ЗАДАЧА. МАССИВ СОВПАДЕНИЙ
/* Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента. */

// function findMatches(array, ...args) {
//   const matches = [];

//   for (const item of args) {
//     if (array.includes(item)) {
//       matches.push(item);
//     }
//   }

//   return matches;
// }

// console.log('Result:', findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// TODO 34. МЕТОДЫ ОБЪЕКТА
/* Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно. */

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Haze'));
// console.log(bookShelf.removeBook('Red sunset'));
// console.log(bookShelf.updateBook('Sands of dune', 'Dune'));

// TODO 35. ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ
/* Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент */

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

//   updateBook(oldName, newName) {
//     const indexOldName = this.books.indexOf(oldName);
//     const newNameApplied = this.books.splice(indexOldName, 1, newName);

//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// TODO 36. ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»
/* К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив. */

// const atTheOldToad = {
//   potions: [],
// };

// console.log(atTheOldToad);

// TODO 37. ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ
/* Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions. */

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());

// TODO 38. ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ
/* Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions. */

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.addPotion('Invisibility'));

// TODO 39. ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   removePotion(potionName) {
//     const indexPotionName = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotionName, 1);

//     return this.potions;
//   },
// };

// console.log(atTheOldToad.removePotion('Dragon breath'));

// TODO 40. ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ
/* Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions. */

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   updatePotionName(oldName, newName) {
//     const indexOldName = this.potions.indexOf(oldName);
//     this.potions.splice(indexOldName, 1, newName);

//     return this.potions;
//   },
// };

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// TODO 41. ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ
/* Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

{
  name: "Dragon breath",
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.

addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.

removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.

updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions. */

// * v1
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  // * v1
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const item = this.potions[i];
      const { name, price } = newPotion;

      if (item.name === name) {
        return `Error! Potion ${name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
    return this.potions;
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const item = this.potions[i];

      if (item.name === potionName) {
        this.potions.splice(i, 1);
        return this.potions;
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const item = this.potions[i];

      if (item.name === oldName) {
        this.potions.splice(i, 1, { ...item, name: newName });
        return this.potions;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
};

//* v2
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         if (potionIndex === -1) {
//           return `Potion ${potionName} is not in inventory!`;
//         }
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// console.log('GetPotions:', atTheOldToad.getPotions());
// console.log('AddPotion:', atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log('RemovePotion:', atTheOldToad.removePotion('Dragon breath'));
// console.log('Update:', atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
