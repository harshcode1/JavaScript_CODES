let obj = {
    CN:63,
    DECA:65.5,
    DM:60,
    DS:61.5,
    EWA:78.5
}
console.log("Here are your marks")
console.table(obj)
console.info("info") // Very Similar to log method
console.assert(true)

// Here now we will see an interesting method which can help us calculate the time
console.time("WhileLoop") 
let i = 0;
while(i<10){
    console.log("Hey "+i)
    i++
}
console.timeEnd("WhileLoop")

console.time("ForLoop")
for(let i = 0;i<10;i++) {
    console.log("Hey "+i)
}
console.timeEnd("ForLoop")