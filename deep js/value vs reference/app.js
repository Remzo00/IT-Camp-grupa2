//pass by value vazi za proste tipove podataka

let a = 10
let b = "test"
let c = a //pass by value
c = 11

console.log(c)
console.log(a)

//pass by reference vazi slozene tipove podataka

let niz_a = [1,2]
let niz_b = niz_a

niz_b.push(3)

console.log("niz a", niz_a)
console.log("niz b", niz_b)





