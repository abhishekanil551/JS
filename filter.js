// Given an array of strings, filter out the strings that have a length greater than 5 characters
// const strings = ["apple", "banana", "cherry", "date"];
// const str=strings.filter(num=>num.length>=5)
// console.log(str)


// Given an array of numbers, filter out the numbers that are greater than 100 and less than 1000.

// const numbers = [50, 150, 200, 999, 1001, 50, 1200, 100];
// const number=numbers.filter(num=>num<=100 || num>=1000)


// console.log(number)



// Given an array of numbers, filter out the duplicate numbers, so the resulting array contains only unique values.

// const arr=[1,3,4,5,3,2,2,1]
// const arrr=arr.filter((val,i,ar)=>ar.indexOf(val)===ar.lastIndexOf(val))

// console.log(arrr)

// Given an array containing various data types (such as strings, numbers, booleans, null, undefined), filter out the falsy values (e.g., empty strings, zero, false, null, undefined).


const mixedArray = ["hello", 0, null, undefined, "world", false, "", 42, true];
// const mixed =mixedArray.filter(Boolean) 

//  OR 

//  const mixed = mixedArray.filter(value => value);
// console.log(mixed)


// Given two arrays of numbers, filter out the numbers that are present in the first array but not in the second array.

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const arr=array1.filter(val=>array2.includes(val))

// console.log(arr);


// Given an array of strings, filter out the strings that match a specific regular expression pattern.
// const a=/[aeiou]/i
// const strings = ["apple", "banana", "cat", "dog", "elephant", "fox",'kkkk'];
// const str=strings.filter(st=>!a.test(st))

// console.log(str);














































