//find prime use promise

// function a(num){
//     return new Promise((resolve,reject)=>{
//         if(num=2)resolve('isprime')
//         if(num <=1) reject('not prime')
//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num%i==0){
//                 reject('not prime')
//             }else{
//                 resolve('is prime')
//             }
//         }
//     })
// }
// a(2)
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })





// const promiseChaing=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve('first')},1000)
// })

// promiseChaing
// .then((yes)=>{
//     console.log(yes)
//     return 'second'
// })
// .then((yes)=>{
//     console.log(yes)
//     return 'third'
// })
// .then((yes)=>{
//     console.log(yes)
//     return 'frouth'
// }).then((yes) => console.log(yes))  
// .catch((err) => console.error('Error:', err));




// const promise=new Promise((resolve,reject)=>setTimeout(()=>reject('first'),1000))
// const promise1=new Promise((resolve,reject)=>setTimeout(()=>resolve('second'),1000))
// const promise2=new Promise((resolve,reject)=>setTimeout(()=>reject('third'),1000))
// const promise3=new Promise((resolve,reject)=>setTimeout(()=>resolve('fourth'),1000))

// Promise.race([promise,promise1,promise2,promise3])
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })




