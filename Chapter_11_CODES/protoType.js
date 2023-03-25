let a = {
    name2: "Harry",
    language: "JavaScript",
    run: () => {
      alert("self run")
    }
  }
  console.log(a)
  
  
  let p = {
    run: () => {
      alert("run")
    }
  }
  
  p.__proto__ = {
    name: "Jackie"
  }
  
  a.__proto__ = p
  a.run()
  console.log(a.name)

  // Firstly It will search in the object itself and if founded then it will run it...
  // Otherwise it will search in prototypes......