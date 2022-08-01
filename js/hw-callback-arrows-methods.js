//TODO 1. ФУНКЦИЯ КАК ЗНАЧЕНИЕ
/* Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza. */

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// TODO 2. КОЛБЭК-ФУНКЦИИ
/* Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы. */

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// // "Pizza Royal Grand is being prepared, please wait..."

// console.log(makeMessage('Ultracheese', deliverPizza));
// // "Delivering Ultracheese pizza."
