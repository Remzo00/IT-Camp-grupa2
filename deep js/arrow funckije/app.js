// U JavaScriptu postoje dve glavne vrste funkcija - obične funkcije i arrow funkcije.
// Obe vrste funkcija se koriste za definisanje blokova koda koji se mogu pozivati i ponovo upotrebljavati u programu,
// ali postoje neke bitne razlike u tome kako funkcinisu

//Razlika br 1: sintaksa
function sabirati(a,b){
    return a + b
}

const sabirati1 = (a,b) =>{
    return a + b
}

//Razlika br 2: this

//Dinamican this
const osoba = {
    ime: "Mensur",
    prezime: "Mavric",
    pozdrav: function(){
        console.log(`Pozdrav ${this.ime + " " + this.prezime}`)
    }
}

osoba.pozdrav() //Pozdrav Mensur Mavric

//Statican this
const osoba1 = {
    ime: "Edin",
    prezime: "Mavric",
    pozdrav: () =>{
        console.log(`Pozdrav ${this.ime + " " + this.prezime}`)
    }
}

osoba1.pozdrav() //Pozdrav undefined undefined
