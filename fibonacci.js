// Fibonacci Sequence

generateFibanacci = (lenght) => {
  let n1 = 0;
  let n2 = 1;
  let series = [];
  while (series.length <= lenght - 1) {
    series.push(n1);
    let temp = n1;
    n1 = n2;
    n2 = temp + n2;
  }
  return series;
};
