//DOM u JavaScriptu oznacava Document Object Model, sto je standardna reprezentacija HTML
//ili XML documenta u obliku objekta. DOM omogucava programerima da manipulisu sadrzajem,
//strukturom i stilom web stranice koriscenjem JavaScripta.

//Svaki element na web stranici se moze posmatrati kao objekat u DOM-u, a svaki objekat ima
//svojstva i metode kojima se moze manipulisati.

//Koriscenjem DOM-a, JavaScript omogucava dinamicko generisanje i azuriranje sadrzaja web
//stranice bez potrebe da se ceo dokument ucita ponovo. To je jedan od temeljnih principa,
//web programiranja i veoma vazan za razvoj interaktivnih i dinamickih web aplikacija.

//getElementById -> uzima element iz HTML-a po ID
const paragraf = document.getElementById("test").innerHTML = "Hellooo"

const header = document.getElementsByClassName("demo").style.color = "blue"

const test = document.getElementsByTagName("h1")



