const solution = (n) => {
  let sum = 0;
  let count = 1;

  for (let i = 1; i < n / 2; i++) {
    for (let j = i; j < n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      } else if (sum > n) {
        break;
      }
    }
    sum = 0;
  }

  return count;
};