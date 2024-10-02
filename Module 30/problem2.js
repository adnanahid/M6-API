// write a arrow function where it will do the following:
// a) it will take an array where the array elements will be the name of your friends.
// b) check if the length of each elelment is event, push elements with even length to a new array and return the result


const friends = ["Mamun", "Obayed", "Abrar", "Sajib"];

const oddNames = (friends) => {
  const evenNames = [];
  for (const name of friends) {
    if (name.length % 2 === 1) {
      evenNames.push(name);
    }
  }
  return evenNames;
};
console.log(oddNames(friends));

const names = (array) => array.filter((name) => name.length % 2 === 1);
console.log(names(friends));

