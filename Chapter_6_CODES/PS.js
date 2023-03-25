console.log(typeof age)
let state = true
const drive = (age) => {
    return age>=18?true:false;
}
while (state) {
    let age = prompt("What's Your age")
    age = Number.parseInt(age)
    if(age<0) {
        console.error("Please Enter a Valid Age")  // It will be seen in Console
        break
    }
    if(age>4) {
        location.href = "http://google.com"
        break
    }
    if(drive(age)) {
        alert("You can Drive")
        document.write("Congratulations!!")
    } else {
        alert("Sorry! You can't Drive")
    }
    state = confirm("Do you want to go again")
}
// By the Way, it was comparing well when i had not converted into string.....

let colour = prompt("Enter the Colour")
document.body.style.background = colour