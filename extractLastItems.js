// write a function which takes an array and numberofextractin  (say n ) in argument.
// the function should extract last n items in the array

const animals = ["ant", "cat", "snake", "hen", "pig"];

const extractLastTwo = (array, n) => {
  return array.slice(-n);
};

console.log(extractLastTwo(animals, 2));

// OUTPUT: [ 'hen', 'pig' ]
