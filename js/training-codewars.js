// TODO Task #1 Unique In Order
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

// TODO Task #12 Basic Mathematical Operations
/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

// function basicOp(operation, value1, value2) {
//   let result = 0;

//   switch (operation) {
//     case '+':
//       result = value1 + value2;
//       break;

//     case '-':
//       result = value1 - value2;
//       break;

//     case '*':
//       result = value1 * value2;
//       break;

//     case '/':
//       result = value1 / value2;
//       break;
//   }

//   return result;
// }

// console.log(basicOp('+', 4, 7)); // 11
// console.log(basicOp('-', 15, 18)); // -3
// console.log(basicOp('*', 5, 5)); // 25
// console.log(basicOp('/', 49, 7)); // 7

// TODO Task #13 Count of positives / sum of negatives
/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

// function countPositivesSumNegatives(input) {
//   if (input === null) {
//     return new Array();
//   }

//   if (input.length < 1) {
//     return new Array();
//   }

//   if (input[0] + input[1] === 0) {
//     return new Array();
//   }

//   return [
//     input.filter(number => number > 0).length,
//     input.filter(number => number < 0).reduce((acc, number) => acc + number, 0),
//   ];
// }

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(input)); // [10, -65]

// console.log('null', countPositivesSumNegatives(null)); //
// console.log('пустой', countPositivesSumNegatives([])); //
// console.log('два ноля', countPositivesSumNegatives([0, 0])); //

// TODO Task #14 Two to One
/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

// function longest(s1, s2) {
//   return s1
//     .concat(s2)
//     .split('')
//     .filter((symbol, index, array) => array.indexOf(symbol) === index)
//     .sort()
//     .join('');
// }

// console.log(longest('aretheyhere', 'yestheyarehere'));
// // "aehrsty"

// console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'));
// //"abcdefghilnoprstu"

// console.log(longest('inmanylanguages', 'theresapairoffunctions'));
// // 'acefghilmnoprstuy';

// TODO Task #15 MakeUpperCase
/* Write a function which converts the input string to uppercase. */

// function makeUpperCase(str = '') {
//   return str.toUpperCase();
// }

// console.log(makeUpperCase('hello')); // "HELLO"

// TODO Task #16 You only need one - Beginner
/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

// function check(a = [], x) {
//   return a.includes(x);
// }

// console.log(check([66, 101], 66)); // true
// console.log(check([101, 45, 75, 105, 99, 107], 107)); // true
// console.log(check(['t', 'e', 's', 't'], 'e')); // true
// console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // false

// TODO Task #17 Odd or Even?
/* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun! */

// function oddOrEven(array) {
//   return array.reduce((acc, number) => acc + number, 0) % 2 === 0 ? 'even' : 'odd';
// }

// console.log(oddOrEven([0])); // 'even'
// console.log(oddOrEven([1])); // 'odd'
// console.log(oddOrEven([])); // 'even'
// console.log(oddOrEven([0, 1, 5])); // 'even'
// console.log(oddOrEven([0, 1, 3])); // 'even'
// console.log(oddOrEven([1023, 1, 2])); // 'even'

// TODO Task #18 Reverse words
/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

// function reverseWords(str = '') {
//   return str
//     .split(' ')
//     .map(element => element.split('').reverse())
//     .join(' ')
//     .replace(/,/g, '');
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// 'ehT kciuq nworb xof spmuj revo eht yzal .god';

// TODO Task #19 Square Every Digit
/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

// function squareDigits(num) {
//   return Number(
//     num
//       .toString()
//       .split('')
//       .map(number => Math.pow(number, 2))
//       .join('')
//   );
// }

// console.log(squareDigits(3212)); // 9414
// console.log(squareDigits(2112)); // 4114
// console.log(squareDigits(0)); // 0

// TODO Task #20 Binary Addition
/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */

// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// console.log(addBinary(1, 1)); // "10" (1 + 1 = 2 in decimal or 10 in binary)
// console.log(addBinary(5, 9)); // "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// TODO Task #21 Return Negative
/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */

// function makeNegative(num) {
//   return num <= 0 ? num : num - num * 2;
// }

// console.log(makeNegative(42)); // -42

// TODO Task #22 Is this a triangle?
/* Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). */

// function isTriangle(a, b, c) {
//   return a + b > c && b + c > a && c + a > b ? true : false;
// }

// console.log(isTriangle(1, 2, 2)); // true
// console.log(isTriangle(7, 2, 2)); // false

// TODO Task #23 A Needle in the Haystack
/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6" */

// function findNeedle(haystack = []) {
//   return haystack.indexOf('needle') !== -1
//     ? `found the needle at position ${haystack.indexOf('needle')}`
//     : 'needle not found';
// }

// const haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// const haystack_2 = [
//   '283497238987234',
//   'a dog',
//   'a cat',
//   'some random junk',
//   'a piece of hay',
//   'needle',
//   'something somebody lost a while ago',
// ];
// const haystack_3 = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   8,
//   7,
//   5,
//   4,
//   3,
//   4,
//   5,
//   6,
//   67,
//   5,
//   5,
//   3,
//   3,
//   4,
//   2,
//   34,
//   234,
//   23,
//   4,
//   234,
//   324,
//   324,
//   'needle',
//   1,
//   2,
//   3,
//   4,
//   5,
//   5,
//   6,
//   5,
//   4,
//   32,
//   3,
//   45,
//   54,
// ];
// const haystack_4 = ['3', '123124234', undefined, 'world', 'hay', 2, '3', true, false];

// console.log(findNeedle(haystack_1)); //'found the needle at position 3'
// console.log(findNeedle(haystack_2)); //'found the needle at position 5'
// console.log(findNeedle(haystack_3)); //'found the needle at position 30'
// console.log(findNeedle(haystack_4)); //'found the needle at position 30'

// TODO Task #24 String repeat
/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

// function repeatStr(n, s) {
//   let str = '';

//   for (let i = 1; i <= n; i += 1) {
//     str += s;
//   }

//   return str;
// }

// console.log(repeatStr(3, '*')); // "***"
// console.log(repeatStr(5, '#')); // "#####"
// console.log(repeatStr(2, 'ha ')); // "ha ha "

// TODO Task #25 Reversed Strings
/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

// function solution(str = '') {
//   return str.split('').reverse().join('');
// }

// console.log(solution('world')); // 'dlrow'
// console.log(solution('hello')); // 'olleh'
// console.log(solution('')); // ''
// console.log(solution('h')); // 'h'

// TODO Task #26 Isograms
/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

// function isIsogram(str = '') {
//   const unique = str
//     .toLowerCase()
//     .split('')
//     .filter((symbol, index, array) => array.indexOf(symbol) !== index);

//   return unique.length < 1 ? true : false;
// }

// console.log(isIsogram('Dermatoglyphics')); // true
// console.log(isIsogram('isogram')); // true
// console.log(isIsogram('aba')); // false
// console.log(isIsogram('moOse')); // false
// console.log(isIsogram('isIsogram')); // false
// console.log(isIsogram('')); // true

// TODO Task #27 Returning Strings
/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly] */

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

// console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
// console.log(greet('Shingles')); // "Hello, Shingles how are you doing today?"

// TODO Task #28 Shortest Word
/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

// function findShort(s = '') {
//   return Math.min(...s.split(' ').map(word => word.length));
// }

// console.log(findShort('bitcoin take over the world maybe who knows perhaps')); // 3
// console.log(findShort('turns out random test cases are easier than writing out basic ones')); // 3
// console.log(findShort("Let's travel abroad shall we")); // 2

// TODO Task #29 Even or Odd
/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

// function even_or_odd(number) {
//   return number % 2 ? 'Odd' : 'Even';
// }

// console.log(even_or_odd(2)); // "Even"
// console.log(even_or_odd(7)); // "Odd"
// console.log(even_or_odd(-42)); // "Even"
// console.log(even_or_odd(-7)); // "Odd"
// console.log(even_or_odd(0)); // "Even"

// TODO Task #30 You're a square!
/* A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n)) ? true : false;
};

console.log(isSquare(-1)); // false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false
