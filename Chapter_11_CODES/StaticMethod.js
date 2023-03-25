class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      console.log("Animal " + this.name + " is walking")
    }
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  // Static Methods are the methods which are attached to the whole class
  // console.log(j.capitalize("thisa")) // --- > this doesnt work