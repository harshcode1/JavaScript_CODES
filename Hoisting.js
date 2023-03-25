// -> Here we will see if there are Functions which 
// Following two lines will run successfully due to JavaScript hoisting
sayhello()  // => It will run successfully...
function sayhello(){
    console.log("Hey Handsome")
}

console.log(a) // undefined
console.log(b)
var a // in case of var, it should be decalared atleast... variable will be undefined until it is intialized
var b = 500 // Declaration hoisted to the top but initialization is not
console.log(a) // undefined
console.log(b)

// JS only hoists declaration., not intialization....
// Function expressions and class expressions are not hoisted.........
greet()
var greet = function() {
  console.log("Good morning")
}

// in case of const and let not defined.... => It means that it can't be Doneee......
console.log(j) // => throw an error....
let j = 0