//1. Napraviti niz koji sadrzi od 5 elemenata koji sadrzi string, number, boolean
//2. Promeniti drugi element niza let myArray = ["a", "b", "c", "d"];
//3. Dodati "I", 2, "three" na pocetku niza i dodati 7, "VIII", 9 na kraju niza let mixedNumbers = ["IV",5,"six"]
//4. Izbrisati prvi i poslednji element niza let arr = [1,2,3,4,5]
//5. U datom objektu promeniti vrednost online iz 42 u 45
// let userActivity = {
//   id: 23894201352,
//   date: "January 1, 2017",
//   data: {
//     totalUsers: 51,
//     online: 42,
//   },
// };

// console.log(userActivity);

//1.
const niz = ["a", "b", 1, 2, true, false];
console.log(niz);

//2.
let myArray = ["a", "b", "c", "d"];
myArray[1] = "m";
console.log(myArray);

//3.
let mixedNumbers = ["IV", 5, "six"];
mixedNumbers.unshift(1, "II", "three");
mixedNumbers.push(7, "VIII", 9);
console.log(mixedNumbers);

//4.
let arr = [1, 2, 3, 4, 5];
arr.shift();
arr.pop();
console.log(arr);

//5.
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
userActivity.data.online = 45;
console.log(userActivity);
