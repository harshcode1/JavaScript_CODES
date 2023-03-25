console.log("Let's Do All the Questions")

//Problem 1
const ScriptLoading = async (src) => {
    return new Promise((resolve, reject) => {
        var script = document.createElement("script")
        script.src = src
        script.onload = function () {
            console.log("Inserted src " + src)
        }
        document.body.appendChild(script)
        resolve(src + " Loading Done")
    })
}

// ScriptLoading("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
// ScriptLoading().then(()=>{
//     alert("Script Loading Done")
// })

// Problem 2 
// const main2 = async() => {
//     // Let's Calculate in how much time it will be Donee....
//     console.log(new Date().getMilliseconds())
//     let a = await ScriptLoading("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
// main2()

// Problem 3
let p3 = async () => {
    return new Promise((resolve, reject) => {
        reject(new Error("There has been an Error"))
    })
}
let tryp3 = async () => {
    try {
        let p = await p3()
        console.log(p3)
    } catch (err) {
        console.log("Errorr")
    }
}
tryp3()

// Problem 4
let m1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}

let m2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 2000);
    })
}

let m3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}

let com = async () => {
    console.time("Run")
    // Now here let's take a Real Life Scenerio i.e.  when we load something from a website then Something Something are fetched from the
    // databases and they are fetched using this so that they all can be displayed together......

    // Here we have runned them one by one(Taked a lot of time..). Now let's run them together.......
    // let n1 = await m1()
    // let n2 = await m2()
    // let n3 = await m3()
    // console.log(n1, n2, n3)

    // Fast one...
    let n1 = m1()
    let n2 = m2()
    let n3 = m3()
    let n1n2n3 = Promise.all([n1,n2,n3])
    console.log(n1n2n3)
    console.timeEnd("Run") 
    // Parellel Execution..
}
com()