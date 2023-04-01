// Nasleđivanje (engl. inheritance) u JavaScript-u se odnosi na proces preuzimanja karakteristika jednog objekta od drugog objekta,
// odnosno stvaranja hijerarhije objekata u kojoj su neki objekti izvedeni iz drugih objekata.

// extends -> kljucna rec
// super() -> kljucna rec

// Klasa Zivotinja koja ima properti vrsta i kilaza.
// Ima tri metode: wakeUp(), eat(), sleep()

//  wakeUp(){
//     return `${this.name} is going to wake up`
//  }

class Animal{
    constructor(breed, weight){
        this.breed = breed
        this.weight = weight
    }

    wakeUp(){
       return `${this.breed} is going to wake up`
    }

    eat(){
        return `${this.breed} is going to eat`
    }

     sleep(){
        return `${this.breed} is going to sleep`
    }
}

class Elephant extends Animal{
    constructor(breed, weight){
        super(breed, weight)
    }

    dailyRoutine(){
        return `${super.wakeUp()} then ${super.eat()} and then ${super.sleep()}`
    }
}

const display = (content) => {
    console.log(content)
}

const elephant = new Elephant("African", "1T")
display(elephant.dailyRoutine())

//Napraviti klasu Osoba koja sadrzi ime i prezime
//Napraviti klasu Student koja nasledjuje Osoba i ima jedan properti visak, a to je fakultet
//Klasa student ima metodu prijavaIspita()
//Klasa student treba da ispisuje ime i prezime studenta i fakultet
//Primer: "Ja sam Pera Peric sa fakulteta Racunarskih nauka"

//VEZBA
//Napraviti Klasu Vozilo koja ima boju, brzinu i model i tri metode
//pokreni(), zaustavi(), promeniBrzinu()
//Napraviti klasu Automobil koja nasledjuje klasu Vozilo
//Klasa Automobil ima jedan novi properti: marka
//Napraviti instancu za obe klase i pozvati metode i za Vozilo i Automobil


















class Vozilo {
    constructor(boja, brzina, model) {
      this.boja = boja;
      this.brzina = brzina;
      this.model = model;
    }
  
    pokreni() {
      console.log('Vozilo je pokrenuto.');
    }
  
    zaustavi() {
      console.log('Vozilo je zaustavljeno.');
    }
  
    promeniBrzinu(novaBrzina) {
      console.log(`Brzina je promenjena sa ${this.brzina} na ${novaBrzina}.`);
      this.brzina = novaBrzina;
    }
  }
  
  