const solution = (n) => {
  let jump = 0;

  while (n >= 1) {
    if (n % 2 === 1) {
      jump += 1;
      n -= 1;
    }
    n = Math.floor(n / 2);
  }

  return jump;
};