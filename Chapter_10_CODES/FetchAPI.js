let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})

// API-> Application Programming Interface
// It basically means whenever we want to fetch data from any network or we want to upload any data then we use fetch api.
// We send network request through API....
// Fetch always returns an API.......
// Whenever we want to get info from a website then we need to give some key which is given to us by the website.
// Also thats why we need to have some free api's... so that they don't require authentication...