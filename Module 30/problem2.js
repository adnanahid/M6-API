// write a arrow function where it will do the following:
// a) it will take an array where the array elements will be the name of your friends.
// b) check if the length of each elelment is event, push elements with even length to a new array and return the result

// print the result

// const filterEvenLengthNames = (friends) => {
//     const evenLengthNames = [];
//     friends.forEach((name) => {
//       if (name.length % 2 === 0) {
//         evenLengthNames.push(name);
//       }
//     });
//     return evenLengthNames;
//   };

//   Example usage:
//   const friends = ["Mamun", "Obayed", "Abrar"];
//   const result = filterEvenLengthNames(friends);
//   console.log(result); // Output: ["Mamun", "Obayed"]

const oddNames = (friends) => {
  const evenNames = [];
  for (const name of friends) {
    if (name.length % 2 === 0) {
      evenNames.push(name);
    }
  }
  return evenNames;
};

const friends = ["Mamun", "Obayed", "Abrar"];
const result = oddNames(friends);
console.log(result);
