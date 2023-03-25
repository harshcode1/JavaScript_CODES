// When there are function inside the functions, then it is tending to callbacks and callbacks and callbacks.....
// Callbacks -> 
function LoadScript(src, callback) {
    var script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("Inserted src " + src)
        callback(null, src)
    }
    script.onerror = function () {
        console.log("Error with the src " + src)
        callback(new Error("Got some error"))
    }
    document.body.appendChild(script)
}

LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function greet(error, src) {
    if (error) {
        console.log("Here is the error name")
        console.log(error)
        return
    }
    LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function greet(error, src) {
        if (error) {
            console.log("Here is the error name")
            console.log(error)
            return
        }
        LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap3.bundle.min.js", function greet(error, src) {
            if (error) {
                console.log("Here is the error name")
                console.log(error)
                return
            }
            LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap4.bundle.min.js", function greet(error, src) {
                if (error) {
                    console.log("Here is the error name")
                    console.log(error)
                    return
                }
                LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap5.bundle.min.js", function greet(error, src) {
                    if (error) {
                        console.log("Here is the error name")
                        console.log(error)
                        return
                    }
                })
            })
        })
    })
})

// Now It is making the code unreadable and this is called the pyramid of hell or callback hell.......
// promises can really help us.....