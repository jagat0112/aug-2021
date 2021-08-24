// write a function which takes an array and numberofextractin  (say n ) in argument.
// the function should extract last n items in the array

// const animals = ["ant", "cat", "snake", "hen", "pig"];

// const extractLastTwo = (array, n) => {
//   return array.slice(-n);
// };

// console.log(extractLastTwo(animals, 2));

// OUTPUT: [ 'hen', 'pig' ]

// Find the maximum number of an array

// function myFunction(input) {
//   const sorted = input.sort((a, b) => b - a);
//   return sorted[0];
// }

// console.log(myFunction([3, 12, 2, 4, 1]));

// Find the maximum number of an array

function myFunction(date1, date2) {
  return Math.abs(date1.getTime() - date2.getTime()) / 1000 / 60 / 60;
}

console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01")));
