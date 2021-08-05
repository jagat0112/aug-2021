// find number of occurence of a value in an array

const array = [1, 2, 3, 4, 5, 1, 3];

const findOccurence = (array, value) => {
  let occurence = 0;
  array.forEach((item) => {
    if (item === value) {
      occurence++;
    }
  });
  return `${occurence} times`;
};

const occurence = findOccurence(array, 3);
console.log(occurence);

// Output: 2
