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
// const fetchingData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

//funkcija koja sadrzi lazni objekat 
//id: 1
//ime
//godine
//email adresa
 
const fetchingData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

fetchingData()






const generateFakeObject = async () => {
    const fakeObject = {
      id: Math.floor(Math.random() * 10) + 1,
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com'
    };
    return fakeObject;
  }

  const displayFakeObject = async () => {
    try {
      const fakeObject = await generateFakeObject();
      console.log(fakeObject);
    } catch (error) {
      console.error(error);
    }
  }
  
  displayFakeObject();


