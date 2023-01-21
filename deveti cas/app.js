//High order funkcije se koriste sa nizovima
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 65, 54, 44, 11, 13, 15, 45, 25, 18, 32];


//forEach -> izlistava niz
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i])
// }

// companies.forEach(function(company){
//     console.log(company)
// })

//Map -> pravi novi niz na osnovu zadatog niza

// const companiesNames = companies.map(function(company){
//     return company.name
// })

// console.log(companiesNames)

//Filter -> filtrira niz i vraca trazenu vrednost

// let old = []

// for(let i = 0; i < ages.length; i++){
//     if(ages[i] > 18){
//         old.push(ages[i])
//     }
// }
// console.log(old)

// const old = ages.filter(function(age){
//     if(age > 18){
//         return true
//     }
// })
// console.log(old)

const retailCompany = companies.filter(function(company){
    if(company.category === "Retail"){
        return true
    }
})

console.log(retailCompany)

//Sort -> funckija koja sortira niz

const sortCompanies = companies.sort(function(a,b){
    if(a.end > b.start){
        return 1
    }else{
        return -1
    }
})

console.log(sortCompanies)

//Reduce

