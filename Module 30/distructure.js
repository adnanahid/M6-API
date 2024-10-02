// object destructure
const obj = {name: "Adnan Nahid", age: 22, height: 5.7, color: 'white', job: 'student'}
const {name: borerNam, age: boyos, height, color, job} = obj;
console.log(borerNam);


// Array destructure
const array = [1,2,3,4,5,6];
const [a,b,c,d,e,f] = array


function doubleThem(a, b){
    return [a*2, b*2]
}
const [first, second] = doubleThem(5,6)
console.log(first);