const solution = (n) => {
  const div = 1234567;
  const d = [];
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
    d[i] = d[i] % div;
  }

  return d[n];
};