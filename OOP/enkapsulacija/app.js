//Enkapsulacija se odnosi na proces sakrivanja unutrašnjeg stanja objekta od spoljašnjeg sveta,
//i omogućava nam da zaštitimo podatke i ponašanje objekta od nepoželjnih promena.

class Osoba{
    constructor(ime, godine){
        let _ime = ime;
        let _godine = godine;

        this.getIme = function(){
            return _ime
        }

        this.getGodine = function(){
            return _godine
        }

        this.setIme = function(ime){
            _ime = ime
        }

        this.setGodine = function(godine){
            _godine = godine
        }
    }
}

let osoba = new Osoba("Nebitno", 25)
console.log(osoba.getIme())
console.log(osoba.getGodine())

osoba.setIme("Neko")
osoba.setGodine(30)

console.log(osoba.getIme())
console.log(osoba.getGodine())
