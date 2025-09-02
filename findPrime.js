// let numbers = [19, 15, 3, 7, 17, 4, 11, 20];

// for(var i=0; i<numbers.length; i++ ){
//     let prime=true;
//    if(numbers[i]<=1){
//        prime=false;
//    }
//    for(let j=2; j<numbers[i]; i++){
//     if(numbers[i]%j===0){
//         prime=false;
//         break;
//     }
//     if(prime=true)
//     console.log(numbers[i])

// }

// }







// for(let i=0; i<numbers.length;i++){
//    let prime=true;
//     if(numbers[i]<=1){
//         prime=false;
//     }
//     for(let j=2; j<numbers[i]; j++){
//         if(numbers[i]%j===0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime){
//         console.log(numbers[i])
//     }
// }





// let numbers = [19, 15, 3, 7, 17, 4, 11, 20];
// for(let i=0; i<numbers.length; i++){
//     let prime =true;
//     if(numbers[i]<=1){
//         prime=false;
//     }
//     for(let j=2; j<numbers[i]; j++){
//         if(numbers[i]%j===0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime==true){
//         console.log(numbers[i])  
//     }
// }





// const arr=[1,1,2,2,3,3,4,56,7,7,7,7,5,5,6,6,8];
//  const res = []
 
//  for(let i = 0 ; i< arr.length ; i++){
//      let flag = true 
     
//      for(let j = i+1 ; j< arr.length ; j++){
//          if(arr[i] %2==0 && arr[i] == arr[j]){
//              flag = false
//          }
//      }if(flag== true){
//          res.push(arr[i])
//      }
//  }
//  console.log(res)





// const arr=[1,1,2,2,3,3,4,56,7,7,72,2,2,2,2,2,2,7,5,5,6,6];
// const freq= new Map();
// // for(let i=0; i<arr.length; i++){
// //     if(arr[i]%2===0){
// //         if(indexOf(arr[i])==lastIndexOf(arr[i])){
// //             slice(i)
// //         }
// //     }
// //     console.log(arr[i])
// // }
// let size = arr.length;
// for(let i = 0; i<size; i++) {
//     let k = arr[i];
//     if (freq.has(k) && arr[i]%2==0) {
//         arrCheck(arr, i);
//         i--;
//         size--;
//         continue;
//     }
//     freq.set(k, 1);
// }

// function arrCheck(arr, i) {
//      if(arr[i]===arr[arr.length]){
//            size--;
//         }
//     for(let j = i; j<arr.length -1 ; j++) {
//         arr[i]=arr[i+1];
//     }
// }
// for (let i  = 0; i< size; i++) {
//     console.log(arr[i]);
// }














































