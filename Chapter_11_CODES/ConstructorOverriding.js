class music {
    constructor(name) { // Constructor is made by using this Keyword ONly
        console.log(`Now we can go for ${name}`)
    }
    bajao() {
        console.log("Go for it man")
    }
}

class Guitar extends music {
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }
    constructor() { // Agar hum ye Constructor nhi banayenge to apne aap call ho jayeega
        super("Guitar")
        console.log("I am The new Constructor")
    }
    romantic() {
        console.log("Heee heee Boyyyyy....")
    }

}

let m = new Guitar("Harmonium")
m.bajao()