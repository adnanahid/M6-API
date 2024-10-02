//! normal function
// function add (a, b){
//     return a + b
// }

// const add = function(a, b){
//     return a + b
// }
//! arrow function
// const add = (a, b) => a + b
// console.log(add(2, 5));

const info = {name: "Adnan", age: 22};
const find = id => id.age;
console.log(find(info));

const get = [1,2,4,6,]
const getThird = array => array[2];
console.log(getThird(get));

const pi = () => Math.PI
console.log(pi());