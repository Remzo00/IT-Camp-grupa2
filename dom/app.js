//DOM u JavaScriptu oznacava Document Object Model, sto je standardna reprezentacija HTML
//ili XML documenta u obliku objekta. DOM omogucava programerima da manipulisu sadrzajem,
//strukturom i stilom web stranice koriscenjem JavaScripta.

//Svaki element na web stranici se moze posmatrati kao objekat u DOM-u, a svaki objekat ima
//svojstva i metode kojima se moze manipulisati.

//Koriscenjem DOM-a, JavaScript omogucava dinamicko generisanje i azuriranje sadrzaja web
//stranice bez potrebe da se ceo dokument ucita ponovo. To je jedan od temeljnih principa,
//web programiranja i veoma vazan za razvoj interaktivnih i dinamickih web aplikacija.

//getElementById -> uzima element iz HTML-a po ID
const paragraf = document.getElementById("test").innerHTML = "Pozdrav"

const listItems = document.getElementsByClassName("list-group-fruit")

const klik = () => {
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.color = "blue"
    }
}









