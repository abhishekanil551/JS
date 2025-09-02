// let arr=[1,2,5,10,8,9,2,2,1]
// let arr1=[2,3,6,8,7,10]

// common

// let common=arr.filter((x)=>arr1.includes(x));
// console.log(common)

// uniqe

// let arrr=arr.filter((n)=>!arr1.includes(n))
// console.log(arrr)

// let arr=[1,3,4,56,8,9,1,3,8];
// let sum=0;
// let avg=0;
// for(let i =0; i<arr.length; i++){
//     let a=true;
//     for(let j=0; j<=arr.length; j++){
//         if(i!==j && arr[i]===arr[j]){
//             a=false;
//             break;
//         }
//     }if(a){
//         console.log(arr[i])
//         sum+=arr[i];
//     }

// }
//     avg=sum/arr.length;
//      console.log(avg)

// revarse

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < arr.length / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[arr.length - i - 1];
//   arr[arr.length - i - 1] = temp;
// }
// console.log(arr);


// is an integer

// let arr=['1',2,3,5,7,9,0,9.7,6,3.3]
// function a(num){
//     for(let i=0; i<num.length; i++)
//     if(num[i]%1==0 && typeof num[i] ==='number'){

//         console.log(num[i])
//     }else{
//         console.log('false')
//     }
// }a(arr)


