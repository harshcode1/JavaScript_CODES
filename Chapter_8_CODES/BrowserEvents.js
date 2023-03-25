let a = document.getElementsByClassName("container")[0]

// Here This onclick will Override the html onclick that is inside the html page...
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}