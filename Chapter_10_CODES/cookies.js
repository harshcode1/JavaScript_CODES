// These are small strings of data stored directly in the browser
// document.cookies will show all the cookies 
// Cookies are kept in key value pair

console.log(document.cookie)
document.cookie = "name=Harsh" // Name is key and harsh is value
document.cookie = "name2=Harsh2"
document.cookie = "name3=Harsh3"
document.cookie = "name=Harsh1" // Here it will update the cookie whose key is name
console.log(document.cookie)
// Document.cookie will add cookie.It will not effect other cookies....

// Here site gives unique http key to each user so that when the user visits them, Then they can easily indentify them..........
let key = prompt("Enter your Key")
let value = prompt("Enter your Value")
// document.cookie = `${key}=${value}` -> It's a basic Syntax...........
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
// Now we will get a encoded key and we can decode it by method in website decodebyURIComponent("syntax")