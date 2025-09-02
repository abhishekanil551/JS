

const obj = { a: 2,z:1.2, b: 2,m:9,k:23,j:0,h:5,y:33 };
// let min = Infinity;
// let smin= Infinity;
// for(const value of Object.values(obj)){
//     if(value<min){
//         smin=min;
//         min = value;
//     }
// }console.log(smin)
// console.log(min)






// const ob={ab:3,ac:{ad:33,dc:43},bb:4};
// let sum=0
// for(let key in ob){
//     if(typeof ob[key]==='number'){
//         sum+=ob[key];
//     }
//     else if(typeof ob[key]==='object'){
//         for(let nest in ob[key]){
//             if(typeof ob[key][nest]==='number'){
//                 sum+=ob[key][nest];
//             }
//         }
//     }
// }
// console.log(sum)




// const obj={
//     a:100,
//     b:30,
//     k:20,
//     c:2,
//     p:4
// }
// let large=-Infinity;

// for(let val of Object.values(obj)){
//     if(val>large){
//         large=val
//     }
    
// }console.log(large)







// • add/remove key in object

// let obj = { name: 'John', age: 30 };
// obj.city='tokiyo'
// delete obj.city
// console.log(obj)













// const a = {
//     b: 8,
//     h: 4,
//     u: 9,
//     i: 28,
//     j:9
// };
// let i=-Infinity;
// let n
// for(let key in a){
//     if(a[key]>i){
//         i=a[key]
//         n = key
//     }
// }console.log(n,i)






// const obj={
//     name:'abhi',
//     age:10,
//     place:'kottayam'
// }
// const {name,age,pce}=obj

// console.log(name)
// console.log(age)
// console.log(place)




// for([key,value] of Object.entries(obj))

// console.log(key,value)






// const obj={
//     a:3,
//     b:4,
//     c:3
// }
// let sum=0;
// for(let key in obj){
//     sum+=obj[key]
// }
// console.log(sum)




// const p={
//     a:3,
//     b:4,
//     c:6
// };
// const h=Object.assign({},p)
// console.log(h)




// const obj = { a: 1, b: 2,m:9,k:23,j:0,h:5,y:33 };
// let large=-Infinity;
// let second= -Infinity;
 
// for(const value of Object.values(obj)){
//     if(value>large){
//         second=large;
//         large=value;
//     }else if(value>second && value<large){
//         second=value;
//     }
// }
// console.log(second)
