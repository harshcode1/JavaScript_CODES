let pro = new Promise(function(resolve,reject) {
    console.log("Hey Promises")
    resolve(45)
})


console.log("Hello")
setTimeout(() => {
    console.log("Hello2")
}, 3000);
console.log("Hello3")
console.log(pro)

// Promises are basically used for parellel execution......
// Like in callbacks we wait and there are of course pyramid of hell. So that's why we need to call promise methods...
