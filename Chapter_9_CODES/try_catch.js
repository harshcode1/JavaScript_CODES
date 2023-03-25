//  It's a Basic use...

setTimeout(() => {
    console.log("Welcome To my Magical World")
}, 1000);

// Try Catch => We can't code Asynchonously code in try catch block like 
// try{
//     setTimeout(() => {
//         console.log(naman)
//     }, 1000);
// }catch(error){
//     console.log(error)
// }

// Now It will Work...
try{
    console.log(Naman)
}catch(naman){
    console.log(naman)
}

setTimeout(() => {
    console.log("I am a Magician")
}, 2000);

setTimeout(() => {
    console.log("GoodByeee....")
}, 3000);