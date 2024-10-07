const solution = (str) => {
  let count = 0;
  let repeat = 0;
  let strLength = 0;
  let binary = "";

  while (str !== "1") {
    count = count + (str.match(/0/g) || []).length; // 0 개수 구하기
    str = str.replace(/0/g, ""); // 0을 ''로 변경

    strLength = str.length; // str 길이 구하기
    binary = strLength.toString(2); // str길이를 다시 2진수로 변경

    str = binary; // 2진수를 str로 할당
    repeat++; // 반복 횟수
  }

  return [repeat, count];
};
