let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Yeah! I Gotta Get Back")
        resolve("Promise1")
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3000)
    }, 3000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    }, 4000);
})

// let p4 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject(new Error("Bro_It_is_Throwing_an_Error"));
//     }, 2000);
// })


let p4 = new Promise((resolve, reject) => {
     setTimeout(() => {
        reject(new Error("Errror"))
     }, 2000);
});

// p1.then((value) => {
//     console.log(value)
// })

// p2.then((value) => {
//     console.log(value)
// }).catch(() => {
//     console.log("Some error occured")
//     return 4
// })

// p3.then((value) => {
//     console.log(value)
// })

// Now if we see in the output, then we can easily see that all three are done one by one due to different timeouts but 
// Now we wnt to print them all in one time then we have to do


let All_Promise1 = Promise.all([p1,p2,p3])
All_Promise1.then((value)=>{
    console.log(value)
})
// It will Prnt after 3 seconds bcz all values will be resolved by then..........

// Now if we some promise is rejected then we need to see it's Status... Very Good Method.
let All_Promise2 = Promise.allSettled([p1,p2,p3,p4])
All_Promise2.then((value)=>{
    console.log(value)
})

// .race will rpint out which will be the fastest to resolve i.e, Timer is very Short...
let All_Promise3 = Promise.race([p1,p2,p3,p4])
All_Promise3.then((value)=>{
    console.log(value)
})

// .any will wait for the first Promise to be Resolved and Not Rejected...+, HowsoEver That Promise will Be....
let All_Promise4= Promise.any([p1,p2,p3,p4])
All_Promise4.then((value)=>{
    console.log(value)
})

// resolve and Reject
let All_Promise33 = Promise.resolve(3)
All_Promise33.then((value)=>{
    console.log(value)
})

let All_Promise44 = Promise.reject(32)
All_Promise2.catch((value)=>{
    console.log(value)
})