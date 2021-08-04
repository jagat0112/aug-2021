// Sort Words in Alphabetical Order

const sortWords = (words) => {
  const wordsArr = words.split(" ");
  const sorted = wordsArr.sort().join(" ");
  return sorted;
};

console.log(sortWords("hello sir k cha"));
