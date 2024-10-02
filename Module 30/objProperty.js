// Object.keys(obj);
// Object.values(obj);
// Object.freeze(obj);
// Object.seal(obj)
// obj.religion = 'Islam'
// delete obj.religion
// obj.age = 23


const obj = {name: "Adnan Nahid", age: 22, height: 5.7, color: 'white', job: 'student'};

let {name, age, ...z} = obj
console.log(z);


// for(const keys in obj){
//     const values = obj[keys];
//     console.log(keys)
// }
//  console.log(obj['name']);

// const keys = Object.keys(obj);

// for(const key of keys){
//     const value = obj[key];
//     console.log(key, value);
// }