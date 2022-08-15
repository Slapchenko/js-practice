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
// function find_average(array) {
//   return array.length > 0 ? array.reduce((acc, number) => acc + number) / array.length : 0;
// }

// console.log(find_average([1, 1, 1])); // 1
// console.log(find_average([1, 2, 3])); // 2
// console.log(find_average([1, 2, 3, 4])); // 2.5
// console.log(find_average([])); // 0

// TODO Task #7 Square(n) Sum
/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

// function squareSum(numbers) {
//   return numbers.length > 0
//     ? numbers.map(element => Math.pow(element, 2)).reduce((acc, number) => acc + number)
//     : 0;
// }

// console.log(squareSum([1, 2])); // 5
// console.log(squareSum([0, 3, 4, 5])); // 50
// console.log(squareSum([])); // 0

// TODO Task #8 Complementary DNA
/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

//*v1
// function DNAStrand(dna) {
//   const complementarySide = [...dna]
//     .map((symbol, index, array) => {
//       if (symbol === 'A') return (array[index] = 'T');
//       if (symbol === 'T') return (array[index] = 'A');
//       if (symbol === 'C') return (array[index] = 'G');
//       if (symbol === 'G') return (array[index] = 'C');
//     })
//     .join('');

//   return `${complementarySide}, String ${dna} is`;
// }

// ? v2
// function DNAStrand(dna) {
//
//   return dna.replace(/./g, function (c) {
//     return DNAStrand.pairs[c];
//   });
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// };

// console.log(DNAStrand('AAAA')); // TTTT', 'String AAAA is');
// console.log(DNAStrand('ATTGC')); //  'TAACG', 'String ATTGC is');
// console.log(DNAStrand('GTAT')); // CATA', 'String GTAT is');

// TODO Task #9 Mumbling
/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

// * v1
// function accum(s) {
//   return s
//     .toUpperCase()
//     .split('')
//     .reduce((acc, symbol, index) => acc + '-' + symbol + symbol.toLowerCase().repeat(index));
// }

// * v2
// function accum(s) {
//   return s
//     .split('')
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join('-');
// }

// console.log(accum('RqaEzty'));
// "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum('ZpglnRxqenU'));
// // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum('NyffsGeyylB'));
// // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// console.log(accum('MjtkuBovqrU'));
// // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// console.log(accum('EvidjUnokmM'));
// // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// console.log(accum('HbideVbxncC'));
// // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"

// function accum(s) {
//   return s
//     .toUpperCase()
//     .split('')
//     .reduce((acc, symbol, index) => acc + '-' + symbol + symbol.toLowerCase().repeat(index));
// }

// TODO Task #10 Highest and Lowest
/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

// function highAndLow(numbers) {
//   const numbersArray = numbers.split(' ');
//   const maxNumber = Math.max(...numbersArray);
//   const minNumber = Math.min(...numbersArray);
//   return `${maxNumber} ${minNumber}`;
// }

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')); // '42 -9'

// TODO Task #11 Find the smallest integer in the array
/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min.apply(null, args);
//   }
// }

// const highestNumber = new SmallestIntegerFinder();

// console.log(highestNumber.findSmallestInt([78, 56, 232, 12, 8])); // 8
