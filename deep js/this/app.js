// this u JavaScript-u je posebna referenca na objekt koji je "vlasnik" trenutno izvršene funkcije,
//  odnosno objekt u kojem se funkcija izvodi ili na koji se referira.
//  To znači da vrednost this zavisi o kontekstu u kojem se funkcija izvršava i može biti različita u različitim situacijama.

console.log(this) //Global object(Window)

const osoba = {
    ime: "Mensur",
    prezime: "Mavric",
    pozdrav: function(){
        console.log(`Pozdrav ${this.ime + " " + this.prezime}`)
    }
}

osoba.pozdrav()

const ime = "Edin"
console.log(`Pozdrav ${ime}`)

//call()
//bind()
//apply()