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