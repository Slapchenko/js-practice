/* 1. ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ 
Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:
название - строка "Droid"
цена за штуку - число 2000 */

// Change code below this line
// const productName = 'Droid';
// console.log(productName);
// 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

/* 2. ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
 Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления. */

// let productName = 'Droid';
// productName = 'Repair droid';
// console.log(productName);
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);

/* 3. ТИПЫ ПРИМИТИВОВ (ЧИСЛА, СТРОКИ, БУЛИ)
Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

topSpeed - число 160.
distance - число 617.54.
login - строка "mango935".
isOnline - буль true.
isAdmin - буль false. */

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

/* 4. МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ
Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе. */

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

/* 5. ШАБЛОННЫЕ СТРОКИ
Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк. */

// const productName = 'Droid';
// const pricePerItem = 3500;

// Change code below this line

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

/* 6. ЗАДАЧА: ЗАКАЗ ПРОДУКТА
 Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

pricePerDroid - цена одного дроида, значение 800
orderedQuantity - количество дроидов в заказе, значение 6
deliveryFee - стоимость доставки, значение 50
totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price." */

// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

/* 7. ОБЪЯВЛЕНИЕ И ВЫЗОВ ФУНКЦИИ
Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi. */

// Change code below this line
// function sayHi() {
//  console.log('Hello, this is my first function!');
// }
// sayHi();

/* 8. ПАРАМЕТРЫ И АРГУМЕНТЫ
Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел. */

// Change code below this line
// function add(a, b, c) {
//  console.log(`Addition result equals ${a + b + c}`);
// Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

/* 9. ВОЗВРАТ ЗНАЧЕНИЯ
Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c. */

// function add(a, b, c) {
// Change code below this line
// return a + b + c;
// Change code above this line
//}

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
//console.log(add(5, 10, 15));

/* 10. ЗАДАЧА: ШАБЛОННЫЕ СТРОКИ 2.0
Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

name - название товара
price - цена товара
Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк. */

//function makeMessage(name, price) {
// Change code below this line
//  const message = `You picked ${name}, price per item is ${price} credits`;
// Change code above this line
//  return message;
//}

//makeMessage('Radar', 6150);
//console.log(makeMessage('Radar', 6150));

/* 11. ЗАДАЧА: МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ 2.0
Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество единиц товара в заказе;
pricePerItem - цена одной единицы товара.
Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного. */

//function calculateTotalPrice(orderedQuantity, pricePerItem) {
// Change code below this line
// const totalPrice = orderedQuantity * pricePerItem;

// Change code above this line
//return totalPrice;
//}

//calculateTotalPrice(5, 100);
//console.log(calculateTotalPrice(5, 100));

/* 12. ЗАДАЧА: ЗАКАЗ ПРОДУКТА 2.0
Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество дроидов в заказе
pricePerDroid - цена одного дроида
deliveryFee - стоимость доставки
Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости. */

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// Change code below this line
//  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//  const message = `You ordered droids worth ${totalPrice} credits. Delivery // (${deliveryFee} credits) is included in total price.`;
// Change code above this line
//  return message;
// }
// makeOrderMessage(2, 5, 2);
// console.log(makeOrderMessage(2, 5, 2));

/* 13. ОПЕРАТОРЫ СРАВНЕНИЯ >, >=, < И <=
Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше. */

// function isAdult(age) {
// Change code below this line
// const passed = age >= 18;

// Change code above this line
// return passed;
// }

// isAdult(19);
// console.log(isAdult(19));

/* 14. ОПЕРАТОРЫ СРАВНЕНИЯ === И !==
Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет. */

// function isValidPassword(password) {
// const SAVED_PASSWORD = 'jqueryismyjam';
// Change code below this line
//  isMatch = SAVED_PASSWORD === password;

// Change code above this line
// return isMatch;
// }

// isValidPassword(`jqueryismyjam`);
// console.log(isValidPassword(`jqueryismyjam`));

/* 15. ИНСТРУКЦИЯ IF...ELSE
Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
В противном случае должен выполняться блок else и записывается строка "You are a minor". */

// function checkAge(age) {
//  let message;

//  if (age >= 18) {
// Change this line
// message = 'You are an adult';
//  } else {
// message = 'You are a minor';
//  }

//  return message;
// }

// checkAge(19);
// console.log(checkAge(19));

/* 16. ЗАДАЧА: СКЛАД ТОВАРОВ
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

available - общее количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
В противном случае записывается строка "Order is processed, our manager will contact you.". */

/* function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered > available) {
    message = `Not enough goods in stock!`;
  } else {
    message = `Order is processed, our manager will contact you.`;
  }
  // Change code above this line
  return message;
}
checkStorage(5, 2);
console.log(checkStorage(5, 2)); */
