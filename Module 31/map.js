// const numbers = [4, 5, 6, 7, 8, 9];
// const find = numbers.find(n => n>9)
// console.log(find);
// const filter = numbers.filter(n => n>9)
// console.log(filter);
// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);



// function doubleIt(num) {
//   return num * 2;
// }
// const result = numbers.map(doubleIt);
// console.log(result);



// const multiplication = n => n*2;
// const result1 = numbers.map(doubleIt);
// console.log(result);

// const result2 = numbers.map(n => n*2);
// console.log(result2);




// const num = [1,2,3,4,5];
// let output = num.filter(n => n%2);
// console.log(output);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {name, model, price} = product;
console.log(name);
console.log(model);
console.log(price);

let [num1, num2, num3, ...restItems] = [1,2,3,4,5,6,7,8,9];
console.log(num1);
console.log(num2);
console.log(num3);
console.log(restItems);
