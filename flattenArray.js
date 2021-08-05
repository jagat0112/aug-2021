const mixedArray = [100, 5, "a", [3, 1, 5], 7, 9, [3, ["a", "b"]]];

function flattenArray(mixedArray) {
  let flattened = [];

  for (let item of mixedArray) {
    if (typeof item === "object") {
      for (let item2 of item) {
        if (typeof item2 === "object") {
          for (let item3 of item2) {
            flattened.push(item3);
          }
        } else {
          flattened.push(item2);
        }
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}

console.log(flattenArray(mixedArray));

//  [100, 5, 'a', 3, 1, 5, 7, 9, 3, 'a', 'b']
