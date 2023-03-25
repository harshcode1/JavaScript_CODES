const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }
  
  let b = document.body
  console.log("First child of b is: ", b.firstChild)   // It will load first node that can be text, comment node or anything.....
  console.log("First Element child of b is: ", b.firstElementChild)