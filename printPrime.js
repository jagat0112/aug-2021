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

generatePrimeNumber(2, 100);
