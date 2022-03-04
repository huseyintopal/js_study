// *-----------------------------------------------------
// *                      FOREACH
// *-----------------------------------------------------

const students = ["Bedirhan", "Tuncay", "Mesut", "Enes", "Onur"];

//? 1.Method
const print = (name) => {
  console.log(name);
};

students.forEach(print);

//? 2.Anynmous Method
console.log("*******************************");
students.forEach((student) => console.log(student));

//? Example
const payments = [100, 300, -200, 500, -400, 225, 1000, -700];
let sum = 0;
payments.forEach((p) => (sum += p));
console.log("SUM:", sum);

//! foreach doesnt return
// const sumofPayments = payments.forEach((p) => (sum += p))
// console.log(sumofPayments);

//* Example
payments.forEach((p, i) => {
  p > 0
    ? console.log(i + 1, `You deposit ${p}`)
    : console.log(i + 1, `You withdraw ${p}`);
});

//*-----------------------------------------------------
//*                      MAP
//*-----------------------------------------------------

//* multiply each element of array by 2
//*-------------------------------------------------------
const numbers = [2, 3, 5, 6, 8];
const doubled = numbers.map((n) => n * 2);
console.log(doubled, numbers);

//* if a grade is less than 50, increase it by 20% oherwise
//* increase it by 10% and store all value in the grades array.
//*-------------------------------------------------------
let grades = [30, 50, 77, 38, 44, 80];

grades = grades.map((grade) => (grade > 50 ? grade * 1.1 : grade * 1.2));
console.log(grades);

// grades = grades.map((grade) => {
//  return grade > 50 ? grade * 1.1 : grade * 1.2;
// });

// console.log(grades);

//? Modified

//* Test the each item of the words array whether palindromic or not.
//* Return the result as an array which consists of true or
//* false values for each item
//*-------------------------------------------------------

const words = ["mum", "kek", "gel", "ısı", "iyi"];

const words = ["mum", "kek", "gel", "ısı", "iyi"];

console.log(words.map(item => (item === [...item].reverse().join(""))))