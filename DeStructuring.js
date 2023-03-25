console.log("Hey Harsh Soni")

// => Here we are to do the Destructuring....
let arr = [1, 2]  // Here we need to use Square Brakets.....
let [a, b] = arr  // => Here a,b are assigned to the values inside the array
console.log(arr)
console.log(a, b, arr[0], arr[1])  // Now here a b will give 1 2...

// It is used in the place of traditional method i.e,
// let a = arr[0]
// let b = arr[1]

let arr1 = [1, 2, 3, 4, 5, 6]
let [m, n, h, ...rest] = arr1
console.log(rest)

// We can also do this.,..
let { j, k } = { j: 1, k: 4 }
console.log(j + " " + k)

// Spread Operator => It is used in a case if we want to give multiple parameters to the functions using one reference object...
let arr6 = [3, 5, 8]
let obj1 = { ...arr6 }
console.log(obj1)

let the = (v1, v2, v3) => {
    return (v1 + v2 + v3)
}
console.log(the(...arr6))
// We can change them here also...........
let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"
}

console.log({ ...obj2, name: "John", company: "ABC" })
console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values