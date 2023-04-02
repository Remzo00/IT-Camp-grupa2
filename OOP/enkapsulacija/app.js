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

//Potrebno je implementirati sistem upravljanja radnicima u nekoj firmi. Svi radnici imaju zajednička svojstva (ime, prezime, godine),
//ali postoje i neke razlike među radnicima,
//npr. menadžer i običan radnik imaju različite nadležnosti i plate.
//Potrebno je kreirati klase Radnik i Menadžer koje nasleđuju zajednička svojstva iz klase Osoba,
//a zatim dodati i neke dodatne metode i svojstva.
//Osim toga, sve privatne varijable treba da budu enkapsulirane.
