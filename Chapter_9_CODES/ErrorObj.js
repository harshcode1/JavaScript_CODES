// These will print out exactly what error will print but they will print it out Differently.............

try{
    console.log(rahul)
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}


// We can also throw some Errors like This......................
try{
    throw new Error("My name is Harsh Soni")
    throw new ReferenceError("Uyayaygyuahs")
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

try{
    let age = prompt("Enter Your Age")
    age = Number.parseInt(age)
    if(age>150) {
        alert("Please Enter a Valid Age")
        throw new ReferenceError("Invalid Age")
    }
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("Script is Still Running")