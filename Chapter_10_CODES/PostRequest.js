// Now here you should know that api is used in order to get info or to give info to the website but get request method has it's own 
// limits on how much data it can send. So we need post request in order to send data.....

// Now in fetch request, when we dont declare the other reference name other than the api, then it automatically throws the get request
// Now we will give it the reference

const createtoDo = async (toDo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(toDo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        title: 'Harsh Soni',
        body: 'JS',
        userId: 110,
    }
    let todor = await createtoDo(todo)
    console.log(todor)
    console.log(await getTodo(5))
}

mainFunc()

// => Now this is a Basic Syntax......... You have to practice it.........
// You need to be very Accurate with the Grammer(Spelling Also).