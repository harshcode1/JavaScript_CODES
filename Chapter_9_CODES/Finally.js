// It doesn't Matter if there is an error or no Error, The code in finally Clause will run....

try{
    console.log(program)
    console.log("Welcome")
}catch(error){
    console.log("There has Been a Error")
}
finally{
    console.log("I am here to Dominate")
}
// We need Finally bcz the code will be executed even if there is an error in catch block also.......
// Even if there is return statement in try then also finally will run..............
// Finally will always run..
const f = () => {
    try {
            let a = 0;
             console.log(program)
            console.log("Program ran successfully")
    }
    catch (err) {
            console.log("This is an error")
            console.log(err)
    }
    finally {
            console.log("I am a good boy")
            // Close the file
            // Exit the Loop
            // Write to the log file
    }
}

f()
console.log("End")