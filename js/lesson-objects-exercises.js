//? ## Example 0 - Базові операції з об'єктами

// Написати скрипт, який послідовно зробить наступні дії з об'єктом 'user':
const user = {
  name: 'Simon',
  age: 25,
  hobby: 'swimming',
  isPremium: true,
};
// console.log(user);

// - додасть нову властивість `mood` із значенням 'happy'
user.mood = 'happy';
// console.log(user);

// - замінить значення `hobby` на 'birdwatching'
user.hobby = 'birdwatching';
// console.log(user);

// - замінить значення `premium` на 'false'
user.isPremium = false;
// console.log(user);

// - виведе все що знаходиться всередині `user` в форматі `ключ:значення`
//   використовуючи `Object.keys()` + цикл `for...of`
const keys = Object.keys(user);

for (const key of keys) {
  //   console.log(`${key}: ${user[key]}`);
}

// - написати функцію яка буде додавати до об'єкта `user` передану в аргументах властивість та її значення

function addUserKey(newKeyName, newKeyValue) {
  user[newKeyName] = newKeyValue;
  return user;
}

// console.log(addUserKey('country', 'US'));

// видалити ключ hobby із об'єкта

delete user.hobby;
// console.log(user);

//? ## Example 1
/*
Є об'єкт `order`, який містить послуги одного замовлення на автосервісі
у формати (послуга: ціна). Написати код для виводу суми всього замовлення.
Якщо об'єкт пустий - результат має бути 0.
*/

const order = {
  carWash: 100,
  oilChange: 450,
  tyreRepair: 235,
};

function getOrdertotal(order) {
  const prices = Object.values(order);
  let total = 0;

  for (const price of prices) {
    total += price;
  }

  return total;
}

// console.log('total:', getOrdertotal(order));

//? ## Example 2 - Масив об'єктів
/*
Написати функцію `getPriceOfStones(storage, stoneName)`, що отримує дані про
запаси на складі (у вигляді масиву об'єктів) і потрібну назву товару.
Функція має для заданого каменя повертати загальну вартість запасів
на складі - ціна з урахуванням кількості

Якщо камінь не знайдено - повертати null і кидати помилку в консоль
Якщо камінь є в реєстрі але закінчився (quantity: 0) -
  повертати 0 і кидати ворнінг в консоль
*/

/**
 * @param {Object[]} storage посилання на масив "склада"
 * @param {string} stoneName назва каменя який будемо шукати (e.g. 'Emerald')
 */
function getPriceOfStones(storage, stoneName) {
  let totalPrice = null;

  for (const snone of storage) {
    if (snone.name === stoneName && snone.quantity !== 0) {
      totalPrice = snone.price * snone.quantity;
      return totalPrice;
    } else if (snone.name === stoneName && snone.quantity === 0) {
      totalPrice = 0;
      console.warn(`${stoneName}: product is out of stock`);
      return totalPrice;
    }
  }

  console.warn(`${stoneName}: not found in storage`);
  return totalPrice;
}

// v2
// function getPriceOfStones(storage, stoneName) {
//   // 1. знайти потрібний товар
//   let ourStone = null;

//   for (const item of storage) {
//     if (item.name === stoneName) {
//       ourStone = item;
//       break; // знайшли потрібне - зупиняємо цикл, бо сенсу далі йти нема
//     }
//   }

//   if (!ourStone) {
//     // товар НЕ знайдено
//     console.error('Not found');
//     return null;
//   }

//   console.log('ourStone', ourStone);

//   // 2. підрахувати загальну вартість
//   const totalPrice = ourStone.price * ourStone.quantity;

//   if (!totalPrice) {
//     // товар є, але закінчився
//     console.warn('Not enough stones');
//   }

//   return totalPrice;
// }

// це наш склад дорогоцінних каменів (на ювелирному заводі, чи іще де)
const storageContent = [
  { name: 'Emerald', price: 1300, quantity: 4 },
  { name: 'Diamond', price: 2700, quantity: 3 },
  { name: 'Sapphire', price: 900, quantity: 7 },
  { name: 'Pearl', price: 200, quantity: 0 },
];

// console.log('Result:', getPriceOfStones(storageContent, 'test'));

//? ## Example 3 - Комплексні задачі. STEREO Bank :)
/*
Написати скрипт для персонального кабінету інтернет-банкінга.
Є головний об'єкт `account`, в який необхідно додати методи роботи
з балансом та історією транзакцій.
*/

/**
 * Типів транзацкій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const TRANSACTIONS = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/**
 * Кожна транзакція це об'ект із полями: id, type, amount
 */
const account = {
  // Поточний баланс
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Повертає поточний стан балансу
   * @returns { number }
   */
  getBalance() {
    return this.balance;
  },

  /**
   * Створює і повертає нову транзацію за заданим типом і сумою
   * Кожна транзакція це об'ект із полями: id, type, amount
   * @param { number } amount
   * @param { string } type
   *
   * @returns { { id: number, amount: number, type: string } }
   */
  createTransaction(amount, type) {
    // порядок ключів в об'єкті не важливий впринципі, але є два підходи:
    // 1. ключі по алфавіту
    // 2. ключі по ступеню важливості (як тут у нас)
    return {
      id: Math.round(Date.now() * Math.random()),
      type, // скорочений синтаксис від (type: type)
      amount,
    };
  },

  /**
   * Додає суму на баланс.
   * Створює запис в історії транзакцій (викликає для цього createTransaction)
   * @param {number} amount сума яка буде додана на баланс
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
    this.transactions.push(transaction);

    this.balance += amount;
  },

  /**
   * Знімає суму з баланса.
   * Створює запис в історії транзакцій (викликає для цього createTransaction).
   *
   * Якщо недостатньо грошей - повертає null, пише ворнінг в консоль і не додає транзакцію
   * @param {number} amount сума яка буде знята з балансу
   * @returns { number | null }
   */
  withdraw(amount) {
    if (amount > this.balance) {
      // якщо запрошена сума більше баланса - транзакція не відбудеться
      console.warn('Недостатньо грошей');
      return null;
    }

    const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
    this.transactions.push(transaction);

    this.balance -= amount;
  },

  /**
   * Шукає транзакцію по заданому id.
   * Повертає null якщо транзакції с таким id не існує
   * @param {number} id id транзакції
   * @returns { Object }
   */
  getTransactionDetails(id) {
    let foundTransaction = null;

    for (const tr of this.transactions) {
      if (tr.id === id) {
        foundTransaction = tr;
        break;
      }
    }

    return foundTransaction;
  },

  /**
   * Повертає загальну суму транзакцій даного типу в історії
   * @param { string } type
   * @returns { number }
   */
  getTransactionTotalByType(type) {
    let total = 0;

    // шукаємо всі транзакції з заданим типом і додаємо звідти amount в наш total
    for (const tr of this.transactions) {
      if (tr.type === type) {
        total += tr.amount;
      }
    }

    return total;
  },
};

// test
console.log('1. getBalance:', account.getBalance());

account.deposit(1000);
console.log('2. getBalance + 1000:', account.getBalance());

account.withdraw(500);
console.log('3. getBalance - 500:', account.getBalance());

account.withdraw(100);
console.log('3. getBalance - 100:', account.getBalance());

console.log('4. transactions:', account.transactions);

// id щоразу випадкові, тому дістанемо якийсь вже існуючий айдішник
// і пошукаємо його, зробивши вигляд що ми НЕ ЗНАЄМО що він там точно є :)
const transactionId = account.transactions[1].id;
console.log(
  `5. transaction with id ${transactionId}`,
  account.getTransactionDetails(transactionId)
);

console.log(
  `6. total for type ${TRANSACTIONS.WITHDRAW}:`,
  account.getTransactionTotalByType(TRANSACTIONS.WITHDRAW)
);

// спроба залізти в кредит, коли кредитного ліміту нема
console.log('big withdraw', account.withdraw(5500));
