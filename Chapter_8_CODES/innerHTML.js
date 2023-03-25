console.log(document.body.firstChild)
console.log(document.body.firstElementChild) 
let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" // It also changes..
first.outerHTML 
first.outerHTML = "<div>hey</div>" // It changes it the first child element and the inner html of span or div
document.body.firstChild.data 
console.log(document.body.textContent)
first.hidden = false  // Write it after the id in the tags.....