// while Loop:

//     Runs as long as the condition evaluates to true. It’s used when the number of iterations is not known, but you have a condition to check.
//     The condition is checked before the loop runs.
//     Syntax: while (condition)


// let i = 0;
// while (i < 5) {
//   console.log(i); // Outputs 0, 1, 2, 3, 4
//   i++;
// }



// do...while Loop:

//     Similar to the while loop but guarantees that the block of code will run at least once because the condition is checked after the loop runs.
//     Syntax: do { // code } while (condition);


// let i = 0;
// do {
//   console.log(i); // Outputs 0, 1, 2, 3, 4
//   i++;
// } while (i < 5);





// for...of Loop:

//     Iterates over the values of iterable objects like arrays, strings, maps, or sets.
//     Best suited for iterating over the values of an array or iterable.
//     Syntax: for (const value of iterable)


// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//   console.log(fruit); 
// }




//     for...in Loop:
//         Iterates over keys (property names) of an object or the indexes of an array.
//         Best suited for iterating over object properties.
//         Syntax: for (const key in object)


// const person = { name: "Alice", age: 30, country: "USA" };

// for (const key in person) {
//   console.log(key, person[key]); 
//   // Outputs:
//   // name Alice
//   // age 30
//   // country USA
// }















