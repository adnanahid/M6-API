// write an arrow function where it will do the  following: x2
// 1. Square each array element
// 2. calculate the sum of the squared element.
// 3. return the avg of the sum of the squared element
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const avg = (array) => {
//     const squared = array
//     .map(num => num**2)
//     .reduce((items, previous) => items + previous, 0)
//     return squared/array.length
//   };

// console.log(avg(array));


const numbers = [1, 2, 3, 4, 5];
// Write your function here...
const avgOfCube = array => {
    const cubed = array.map(number => number**3)
    .reduce((current, previous) => current+ previous, 0)
    return cubed/array.length
}
console.log(avgOfCube(numbers));