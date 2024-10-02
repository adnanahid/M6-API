const array = [2, 3, 4, 5, 6, 7, 8, 9];


// let max = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
// }
// console.log(max);


// console.log(Math.max(...array));

const array2 = [...array];
array2.push(10)
console.log(array);
console.log(array2);
const array3 = [...array, 11];
console.log(array3);