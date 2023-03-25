// We can make any Function Async and await a Function inside it....

// Agar hum kisi bhi function k aage async laga de to phir wo promise return karega

// The First very Basic Example
// async function harsh() {
//     return 45
// }

// harsh().then((v)=>{
//     console.log(v)
// })

async function imp() {
    let math = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(99)
        }, 2000);
    })
    let phy = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(92)
        }, 9000);
    })
    // Here it will act like a normal Function if i Didn't awaited it..
    // That's the Beauty of async function
    console.log("Getting Math Number")
    let mathNumber = await math
    console.log("We have Fetched Math's Number")
    console.log("Fetching Physics Number")
    let phyNumber = await phy
    console.log("Physics Numbers Fetched")
    return [mathNumber,phyNumber]
}


// imp().then(()=>{
//     alert("Done Bro...")
// })

// imp().then((value)=>{
//     console.log(value)
// })

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    let a = await imp()
    let b = await cherry()
}
main1()

// Here i have used await again and if i run two Functions Simentaneously
// Then in javascript, both the functions will execute parellely so that's not Good So thats why
// cherry statement will come in mid way
// await let the other things wait until the promise is fully Fullfilled