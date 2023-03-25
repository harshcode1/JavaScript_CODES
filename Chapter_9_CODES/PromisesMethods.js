let p1 = new Promise((resolve,reject)=>{
    console.log("Your Promise is Pending")
    setTimeout(() => {
        alert("Hey there Your promise has been Executed")
        console.log("Promise Done Broooo")
        resolve(true)  // We resolved it by a value
    }, 2000);
})

// Logic => The main Logic BEhind this is that Jo bhi cheez ya code that is written inside the promise will be executed in the background
// And we can know about it very easily..... by then and catch methods..

// Resolve and Reject means if our code is Executed then the promise is been resolve and if if it is not able to be executed 
// Then we will be rejected.. It will tell us the state...


// Here it will show pending State which is very true but soon it will be Doneeeee...............

let p2 = new Promise((resolve,reject)=>{
    console.log("Your Promise is Pending")
    setTimeout(() => {
        alert("Hey there Your promise has been Rejected")
        console.log("Promise rejected Broooo")
        reject(new Error("There has been an Errrorrrrr.........."))
    }, 2000);
})


console.log(p1, p2)
// Here they will not Wait for each Other and will be Executed parellely.....
// If we have 50 promises then no Worry They will be Executed Parellely....


// Both the methods =>

// NOw if p1 has been executed then here will be 
// .then to get the value......
p1.then((value) => {
    console.log(value)
})

p1.then(alert("Congrats,Haaaaa....")) // This can Also be Doneeeee

// There will be an Error in p2 so
// .catch to catch the Error....
p2.catch(()=>{
    console.log("Some Error is there")
})// Try to run the code after removing it and then tell me the Difference............


// We can also do p2 by one another method also..
p2.then((value)=>{
    console.log(value)
},Error=>{
    console.log(error)
})