// Here we have different diff. data types in js which have diff. diff. scopes

{
    let a = 2
    const b = 6
    var m = 90
}
function mk() {
    let c = 6
    const d = 4
    var jk = 80
}

// Var has a function level scope , but in case of block it will not throw an error
console.log(m)
console.log(m,jk)


// => Both will throw an error and hence it is prove that let and const only have a block or function level scope....
console.log(a, b)
console.log(c, d)

