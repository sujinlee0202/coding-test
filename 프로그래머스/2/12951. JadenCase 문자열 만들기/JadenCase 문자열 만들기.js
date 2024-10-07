const solution = (str) => {
  let lowerStr = str.toLowerCase();
  return lowerStr.replace(/\b[a-z]/g, (str) => str.toUpperCase());
};