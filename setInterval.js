// let i=1
// const a=setInterval(()=>{
//     console.log(i)
//     if(i>=10){
//        clearInterval(a)
//     }
//     i++
// },1000)

let i=0;

const a=setInterval(()=>{
    console.log(i)
    if(i>=10){
        clearInterval(a)
    }
    i++;
},1000)
