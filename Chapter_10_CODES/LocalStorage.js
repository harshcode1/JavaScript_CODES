// It is a very useful Feature as it store data continously right from the first time the page is created...

let key = prompt("Enter the Key")
let value = prompt("Enter the Value")

localStorage.setItem(key,value)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

console.log(localStorage.getItem(559)) // We can access an Item.....

if (key == "red" || key == "blue" || key == "411") {
    localStorage.removeItem(key)
}

// It will clear all the local Storage
if (key == 0) {
    localStorage.clear()
}

// Methods
// localStorage.length will return the length
// localStorage.key(559) will return the index Number 