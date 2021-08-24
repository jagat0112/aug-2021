const _ = require("lodash");

const arr = ["jagat", "janak", "krishna"];
const arr2 = ["hema", "laxmi", "mom", "jagat"];

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];
const newArr = _.intersection(arr, arr2);

console.log(newArr);
