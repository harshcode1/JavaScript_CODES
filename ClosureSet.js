function lexicalenvironment(){
    let me = "CS"
    {
        let me = "MFW"
        console.log(me) // Here we know this very well that it's a block level concept.,....
    }
    console.log("Hey man "+me) 
    function c2(){
        console.log("Me gos tala pasta ei moi tu "+me)
    }
    return c2
}

// When a function is returned then it's lexical environment variables references  are also returned in the closure.....
// here is the understanding of the concept that the function is returned there is no problem in that thing
// But when the function is called, it is also consuming a variable that is destroyed when it is used..... due to scope.......
// But here the Lexical Environment is also returning........This is ca
let fub = lexicalenvironment()
fub()


// let's create an another example where we will run multiple closures.........
function returnFunc() {
    const x = () => {
      let a = 1
      console.log(a)
      const y = () => {
        // let a = 2
        console.log(a)
        const z = () => {
          // let a = 3
          console.log(a)
        }
        z()
      }
      a = 999
      y()
    }
    return x
  }

let d = returnFunc()
d()

// Function inside one another is called Closure......