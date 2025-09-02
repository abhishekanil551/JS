// double 

// let arr=[1,3,4,56,7,8,9]
// let arr1=arr.map((num)=>num*2)
// console.log(arr1)*


//Given an array of strings, capitalize the first letter of each string using map().

// let string=['abhishek','anil']
// let str = string.map(num=>{
//     return num.charAt(0).toUpperCase()+num.slice(1)
// })
// console.log(str)*





// Given an array of objects representing people with name and age properties, create a new array containing only the names of these people using map().

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
//   ];

//   let names=people.map(person=>person.name);
//   console.log(names)*


// Given an array of numbers, create a new array where each element is the original number multiplied by its index in the array using map().

// this map only 
// let arr=[1,23,6,5,4,9,8]
// let a=[]
// let arr1 = arr.map(num=>{
//     if(num%2==0){
//     a.push(num*2)
//     }
// })

// console.log(a)

// this filter and map

// let arr=[1,23,6,5,4,9,8]
// let arr1 = arr.filter(num=>num%2==0).map(num=>num*2)
// console.log(arr1)*


// Given a 2D array of numbers, transform it into a new 2D array where each number is squared using map().

// const numbers2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//  ];
  
// const  d2d= numbers2D.map(num=>num.map(ro=>ro*ro))
//  console.log(d2d)8



// Given an array of strings, filter out the strings that contain fewer than 5 characters, and capitalize the first letter of each remaining string using map().

// const strings = ["apple", "cat", "banana", "dog", "elephant"];

// const result = strings
// .filter(str=>str.length>=5)
// .map(str=>str.charAt(0).toUpperCase()+str.slice(1))
// console.log(result);


// Given an array of numbers, create a new array where each number is replaced by "even" if it's even, and "odd" if it's odd using map().
// const numbers = [1, 3, 5, 6, 7, 8, 9, 10];
 
// const nums=numbers.map(num=>num%2===0 ? 'even':'odd' )
// console.log(nums)

// Given an array of strings, transform each string to uppercase and then append " - LENGTH: {length}" to each string, indicating its length, using map().

// const strings = ["apple", "banana", "cherry", "date"];
// const str=strings.map(num=>`${num.toUpperCase()} -length :${num.length}`)
// console.log(str)




// find max age 

// let arr = [
//     {name: 'abhi', age: 18},
//     {name: 'abhi', age: 8},
//     {name: 'abhi', age: 15}
//   ];
  
//   let num=Math.max(...arr.map(n=>n.age))
//   console.log(num)