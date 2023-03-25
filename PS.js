(() => {
    console.log("Hello")
    setTimeout(() => {
        console.log("World")
    }, 2000);
})() //=> This is IIFE 

// Another way....
const a = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 1000 * n)
    })
}
(
    async () => {
        let text = await a("Hello")
        console.log(text)
        text = await a("World")
        console.log(text)
    }
)()

// Here we will use a Spread Syntax....
function h(v1,v2,v3){
    return v1+v2+v3
}
let m = [1,2,3]
console.log(h(...m)); // It is important because next one is iife

(async () => {
    let text = await a("I am resolving after 1 second", 1)
    console.log(text)
    text = await a("I am resolving after 4 seconds", 4)
    console.log(text)
  }
  )()
