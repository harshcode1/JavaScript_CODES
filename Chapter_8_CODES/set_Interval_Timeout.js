document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}
func = (a,s,d) => {
    confirm("Hey User")
}
setTimeout(sum, 1000, 1, 2, 7)
setInterval(func,2000,1,2,3)
// =setInterval(function() {
// =  alert("setinterval")
// =}, 3000)

// let a = setTimeout(function() {
//   alert("I am inside of settimeout")
// }, 5000)

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)

// setInterval and setTimeout Difference -> setInterval will run the code continously after the time we have given to it. 
// So It's Syntax will be same and just the diff. is that it will run coun. and timeout will run it only for one time after the time we
// have given to it...