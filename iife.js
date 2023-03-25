let ac = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(34)
        }, 2000);
    })
}

// let m = async() => {
//     let a = await ac()
//     console.log(a)
//     let b = await ac()  // Here it will 
//     console.log(b)
//     let c = await ac()
//     console.log(c)
// }De

(async() => {
    let a = await ac()
    console.log(a)
    let b = await ac()  // Here it will 
    console.log(b)
    let c = await ac()
    console.log(c)
})() // => This is called Immediately Invoked Functions Expressions.........

// m()