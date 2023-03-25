// console.log("Yessss....")
// let h = "Harsh Soni"
// function hello () {
//     console.log("Hey "+h)
// }
// hello()

// An important Info -> JavaScript does not take string input in function. It always take variables input. In order to get String 
// Input we need to use prompt.......

// Callbacks -> 
function LoadScript (src, callback) {
    var script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("Inserted src "+src)
        callback(null,src)
    }
    script.onerror = function () {
        console.log("Error with the src "+src)
        callback(new Error("Got some error"))
    }
    document.body.appendChild(script)  
}

function greet (error,src) {
    if(error) {
        console.log("Here is the error name")
        console.log(error)
        return
    }
    alert("Hey It's Done "+src)
    console.log("Congrats")
}
LoadScript("https://cdn.jsdelivrm.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",greet)

// Step 1 : We have inserted  the Script by the function :->
// function LoadScript (src) {
//     var script = document.createElement("script")
//     script.src = src
//     document.body.appendChild(script)  
// }


// Step 2 : Now we need to know if the Script is inserted successfully. So we will insert a Function
// function LoadScript (src) {
//     var script = document.createElement("script")
//     script.src = src
//     script.onload = function () {
//         console.log("Inserted")
//     }
//     document.body.appendChild(script)  
// }

// Step 3 : Now here we will use some callback Functions. here now we have insreted an callback function and it will be executed whem the 
// LoadScript function is Done i.e , The script is loaded.
// function LoadScript (src, callback) {
//     var script = document.createElement("script")
//     script.src = src
//     script.onload = function () {
//         console.log("Inserted")
//         callback()
//     }
//     document.body.appendChild(script)  
// }

// function greet () {
//     alert("Hey It's Done")
// }
// LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",greet)


// Step 4 : -> Now there can be some more errors  and we need to fix them so we will use some more methods and this is the final one...

// LoadScript is basically ki bhai ye wali script run kar de aur jab ho jaaye tab call back function run kar dena..