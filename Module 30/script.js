// function add(num1, num2 =0 ) {
//   const result = num1 + num2;
// console.log(num1, num2);
//   return result;
// }
// const sum = add(5);
// console.log(sum);

// function add(num1, num2) {
//   return num1 + num2;
// }

// const add = function (num1, num2) {
//   return num1 + num2;
// };

//

// const doubleIt = a => a * 2;
// const double = doubleIt(5);
// console.log(double);

// const pi = () => Math.PI
// console.log(pi());

// const max = Math.max(6,2,6,45,65,465,6,654,)
// console.log(max);

// const numbers = [23,14,3,36,435,415]
// const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);

// const obj = {
//   first_name: "Adnan",
//   Last_name: "Nahid",
//   age: 20,
//   number: '01736932170',
// };
// const name = obj.first_name;
// const {first_name:nam} = obj
// console.log(nam);

// const numbers = [45, 54, 56, 65];
// const [x, y] = numbers;
// console.log(x);
// console.log(y);

// const bio = {
//   name: "adnan",
//   age: 21,
//   class: "honours 2nd",
// };
// Object.freeze(bio)
// bio.age = 22
// console.log(bio);
// console.log(bio);
// const keys = Object.keys(bio)
// console.log(keys);

// const values = Object.values(bio)
// console.log(values);

// const entries = Object.entries(bio)
// console.log(entries);

// delete bio.age;
// console.log(bio);

// const {age, ...restBio} = bio;
// console.log(restBio);
// delete bio.source
// console.log(bio);

const bio = {
  first_name: "Adnan",
  Last_name: "Nahid",
  age: 20,
  number: '01736932170',
};

for(const key in bio){
    console.log(key);
}