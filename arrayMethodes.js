let arr = [1, 2, 3, 3, 4, 5, 5];
const arra = [1, [2, [3, [4]]]];
let ar = [6, 1, 5, 7, 8, 9, 10];

let s = arr.at(0);
console.log("at(0):", s); // ✅ Get element at index 0

console.log("pop:", arr.pop()); // ✅ Removes last element & returns it
console.log("shift:", arr.shift()); // ✅ Removes first element & returns it
console.log("unshift(1):", arr.unshift(1)); // ✅ Adds 1 at start, returns new length
console.log("arr after unshift:", arr);

console.log("concat:", arr.concat(ar)); // ✅ Combines two arrays into a new one

console.log("flat(4):", arra.flat(4)); // ✅ Flattens nested arrays up to depth 4

console.log("slice(3, arr.length):", arr.slice(3, arr.length)); // ✅ Extracts part of array

console.log("indexOf(3):", arr.indexOf(3)); // ✅ Finds first index of value 3
console.log("lastIndexOf(3):", arr.lastIndexOf(3)); // ✅ Finds last index of value 3

console.log("includes(4):", arr.includes(4)); // ✅ Checks if 4 exists in array

console.log("sort ascending:", ar.sort((a, b) => a - b)); // ✅ Sorts numerically in ascending order

console.log("reverse:", arr.reverse()); // ✅ Reverses the array

console.log("Math.max(...arr):", Math.max(...arr)); // ✅ Finds max value
console.log("Math.min(...arr):", Math.min(...arr)); // ✅ Finds min value

// forEach - iterate & log each element
console.log("forEach:");
arr.forEach((num, index) => console.log(`Index ${index}: ${num}`));

// map - create new array of squared numbers
let map = arr.map((num, index) => num * num);
console.log("map (squared):", map);

// filter - get numbers < 3
let filter = arr.filter(num => num < 3);
console.log("filter (<3):", filter);

// reduce - sum of all elements
const reduce = arr.reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", reduce);

// every - check if all numbers >= 3
const every = arr.every(age => age >= 3);
console.log("every (>=3):", every);

// some - check if there's any even number
const some = arr.some(num => num % 2 === 0);
console.log("some (even numbers):", some);

// rest parameter + reduce - sum function
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("sum(1,2,3,4):", sum(1, 2, 3, 4));
