const solution = (a, b) => {
  let sum = 0;

  const sortA = a.sort((a, b) => a - b);
  const sortB = b.sort((a, b) => b - a);

  for (let i = 0; i < a.length; i++) {
    sum = sum + sortA[i] * sortB[i];
  }

  return sum;
};