console.log("a")

setTimeout(() => {
    console.log("b")
})

console.log("c")

//single-thread
//multi-thread

//Javascript je single-thread jezik

//-------------> PROMISE <---------------
//Promise je objekat koji se vraca nakon asihrone operacije.

const promise = new Promise((resolve, reject) => {
    const number = 3
    if(1 + 2 == number){
        resolve("Success")
    }else{
        reject("Fail")
    }
})

promise.then((message) => {
    console.log("Ovo je " + message)
}).catch((error) => {
    console.log("Ovo je " + error)
})

//Fetching API pomocu fetch() funckije i promise
const fetchingData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

