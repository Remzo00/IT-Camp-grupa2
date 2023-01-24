//1. Koristeci map() funkciju transformisi niz brojeva u niz njihovih kvadrata

const mapNumbers = [1,2,3,4,5]

const num = mapNumbers.map((number) => {
    return number * 2
})

console.log(num)

//2. Koristeci funkciju filter() izdvoj sve parne brojeve niza

const filterNumbers = [1,2,3,4,5]

const paran = filterNumbers.filter((number) =>{
    return number % 2 === 0
})

console.log(paran)

//3. Koristeci funkciju reduce() izracunaj sumu brojeva niza

const reduceNumbers = [1,2,3,4,5]

const reduced = reduceNumbers.reduce((total, brojevi) => {
    return total + brojevi
})

console.log(reduced)

//4. Koristeci funckiju sort() sortiraj objekat od najmladjeg do najstarijeg

const people = [
    {name:'Bob', age:25},
    {name: "Alice", age:35},
    {name: "Charlie", age:30}
]

const sortPeople = people.sort((a,b) => {
    return a.age - b.age
    // if(a.age > b.age){
    //     return 1
    // }else{
    //     return -1
    // }
})

console.log(sortPeople)