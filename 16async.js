// let a=10,b=5
// setTimeout(()=>{
// b=20
// },1500)
// console.log(a+b);

let a=10,b=5;
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
    b=data
    console.log(a+b);
    
})