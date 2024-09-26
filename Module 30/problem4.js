const addTwoArray = (array1, array2) => {
    const newArray = [...array1, ...array2]
    console.log(Math.max(...newArray));
}
addTwoArray([0,1,2,3,4],[5,6,7,8,9])
// const array = [0,1,2,3,4,5,6]
// console.log(array);