let x = function(event) {
    // It's an Pointer Event and You can see it in the Console.
    console.log(event)
    alert("Hello World1!")
}

let y = function(event) {
    console.log(event.target)
    console.log(event)
    console.log(event.type, event.clientX, event.clientY)
    alert("Hello World2!")
}

bts.addEventListener('click', x)
bts.addEventListener('click', y)

let a = prompt("Send a Number")
if(a==2) {
    bts.removeEventListener('click', x)
}

// When we give event as a parameter to the function then we can use many methods of it like i have used above.