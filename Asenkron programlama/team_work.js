// async function f() {
//     let result = 'first!';
//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(() => resolve('done!'), 1000);
//     });
//     result = await promise;
//     console.log(result);
// }
// f();


// -------'2'--------

// var myInterval  = setInterval(function() {console.log("mmk")}, 2000);
// clearInterval(myInterval);
// // console.log(myInterval);

// // ---------'3'--------

// setTimeout and setInterval 

// ---------'4'--------

// let x = 0;

// async function test() {
//     x += await 2;
//     console.log(x)
// }

// test();

// x += 1;
// console.log(x);

// // ---------'5'--------

// const topics = ["cooking", "art", "history"]

// const [first] = ["cooking", "art", "history"]
// console.log(first);

// const [,second,] = ["cooking", "art", "history"]
// console.log(second);

// // ---------'6'--------

// const [,, animal] = ["Horse", "Mouse", "Cat"]
// console.log(animal);

// ---------'7'--------
// var set1 = new Set([1, 2, 1, 3, 4, 5]);
// set1; // Set(5) {1, 2, 3, 4, 5} ; duplicate values are removed.
// // Creating an empty set
// var set2 = new Set();
// console.log(set1);
// console.log(set2);

// ---------'8'--------
// (to start  tasks that might take some time without blocking subsequent tasks from executing immediately)
// sonraki görevlerin hemen yürütülmesini engellemeden biraz zaman alabilecek görevleri başlatmak için
// https://medium.com/@rajatsikder/what-is-asynchronous-programming-9cf938db2b46


// ---------'9'--------

// console.log('I');
// setTimeout(() => {
//     console.log('love');    
// }, 0);
// console.log('Javascript');

// ---------'10'--------

// const foo = {
//     name: 'Noah',

// };
// delete foo.name;

// console.log(foo);

// ------Expots & İmports(modules)-------

// const person = {
//     name: 'fatma'
// };

// export default person;
// export const clean =()=>{....}
// export const baseData = 10;

// console.log('todos');
// console.log('fatma');

// src/animals.js
import animals, {cat, dog} from './callback.js';

animals();
cat();
dog();

console.log(animals());