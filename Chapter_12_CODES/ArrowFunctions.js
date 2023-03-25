// It's a basic Arrow Function........
// const hello = (name) => {
//     console.log("Hello "+name)
// }
// hello("Harsh")

// Now Let's do it in a more Advance way.....
const hello = (name1) => console.log("Good Afternoon " + name1) //=> when we have removed the curly brackets then also it runs....
hello("Mukesh")

// We can write it even () is removed ; But not in the case when we need to give two parameters.... to the function
const jk = nem1 => console.log(nem1); // We can also do it.....
jk("Par")

const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function () {
        // let that = this
        // console.log(this)
        setTimeout(() => {  // => In case of arrow function if we had used common function syntax of js then this would have referred to a 
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)// window object and it's solution is also given.......
    }
}
console.log(x.name, x.exp)
x.show()

// => Basically we can use an arrow function like this
const hun = name34 => {
    console.log("Hey there "+name34)
}
hun("Piha")
// with only one parameter........