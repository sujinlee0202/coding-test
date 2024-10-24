const solution = (t, p) => {
  let count = 0;
  let substring = "";

  for (let i = 0; i < t.length; i++) {
    if (p.length + i <= t.length) {
      substring = t.substring(i, p.length + i);
      if (substring <= p) {
        count++;
      }
    }
  }

  return count;
};