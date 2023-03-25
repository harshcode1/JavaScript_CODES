let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Hey Harsh Soni")
        resolve(40)
    }, 3000);
})

p1.then((value)=>{
    console.log(value)
    console.log("Very Good Harsh Soni")
}).then(()=>{
    console.log("Congrats There has been No error")
    return 7
}).then((value)=>{ // Here there is a very important lesson Please Try to understand it ... 
    console.log("The value that you have put in the resolve thing is "+value)
}).then(()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Promise 2") }, 2000)
})
}).then((value)=>{
    console.log(value)
}).catch(()=>{
    console.log("Not Done Bro, There Has been Some Error")
})
// Please Run the code at least...