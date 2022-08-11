// TODO Task #1
/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder = function (iterable) {
  const uniqueElArray = [...iterable].reduce((acc, element) => {
    if (acc[acc.length - 1] !== element) acc.push(element);
    return acc;
  }, []);

  return uniqueElArray;
};

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// TODO Task #2
/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

// function XO(str) {
//   const x = str
//     .toLowerCase()
//     .split('')
//     .filter(value => value === 'x');

//   const o = str
//     .toLowerCase()
//     .split('')
//     .filter(value => value === 'o');

//   return x.length === o.length;
// }

// console.log(XO('ooxx'));
// console.log(XO('xooxx'));
// console.log(XO('ooxXm'));
// console.log(XO('zpzpzpp'));
// console.log(XO('zzoo'));

// TODO Task #3
/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

// * v1
// function lovefunc(flower1, flower2) {
//   const isflower1Even = flower1 % 2 === 0;
//   const isflower2Even = flower2 % 2 === 0;
//   if (isflower1Even !== isflower2Even) {
//     return true;
//   }
//   return false;
// }

// * v2
// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

// console.log(lovefunc(1, 4)); // true
// console.log(lovefunc(2, 2)); // false
// console.log(lovefunc(0, 1)); // true
// console.log(lovefunc(0, 0)); // false

// TODO Task #4 Sum without highest and lowest number
/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6 */

// function sumArray(array = []) {
//   if (array === null || array.length <= 2) {
//     return 0;
//   }

//   const total = array.reduce((acc, number) => acc + number, 0);

//   return total - (Math.max(...array) + Math.min(...array));
// }

// console.log(sumArray(null)); // 0
// console.log(sumArray([])); // 0
// console.log(sumArray([3])); // 0
// console.log(sumArray([3, 5])); // 0
// console.log(sumArray([6, 2, 1, 8, 10])); // 16
// console.log(sumArray([0, 1, 6, 10, 10])); // 17
// console.log(sumArray([-6, -20, -1, -10, -12])); // -28
// console.log(sumArray([-6, 20, -1, 10, -12])); // 3

// TODO Task #5 Find Maximum and Minimum Values of a List
/* Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5 */

// const min = list => Math.min(...list);

// const max = list => Math.max(...list);

// console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
// console.log(min([42, 54, 65, 87, 0])); // 0
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // 566
// console.log(max([5])); // 5

// TODO Task #6 Calculate average
/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

// * v1
// function find_average(array) {
//   if (array.length > 0) {
//     const total = array.reduce((acc, number) => acc + number);
//     return total / array.length;
//   }

//   return 0;
// }

// * v2
function find_average(array) {
  return array.length > 0 ? array.reduce((acc, number) => acc + number) / array.length : 0;
}

console.log(find_average([1, 1, 1])); // 1
console.log(find_average([1, 2, 3])); // 2
console.log(find_average([1, 2, 3, 4])); // 2.5
console.log(find_average([])); // 0
