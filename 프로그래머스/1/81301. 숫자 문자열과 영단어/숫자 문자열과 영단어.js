const reg = [
  { num: 0, eng: "zero" },
  { num: 1, eng: "one" },
  { num: 2, eng: "two" },
  { num: 3, eng: "three" },
  { num: 4, eng: "four" },
  { num: 5, eng: "five" },
  { num: 6, eng: "six" },
  { num: 7, eng: "seven" },
  { num: 8, eng: "eight" },
  { num: 9, eng: "nine" },
];

const solution = (str) => {
  for (let i = 0; i < reg.length; i++) {
    let regex = new RegExp(reg[i].eng, "g");
    str = str.replace(regex, reg[i].num);
  }

  return Number(str);
};