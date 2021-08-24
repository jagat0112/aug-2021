// Generate Prime Number

const generatePrimeNumber = (high, low = 2) => {
  for (let i = low; i < high; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
      }
    }
    prime && console.log(i);
  }
};

// generatePrimeNumber(2, 100);

const arr = [1, 2, 3, 4, 5];

const obj = {
  key: "values",
};

for (let key of obj) {
  console.log(key);
}
