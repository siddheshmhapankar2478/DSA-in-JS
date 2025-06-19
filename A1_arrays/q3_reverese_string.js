const reverseString = function (s) {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
};

const s = ["h", "e", "l", "l", "o"];
reverseString(s);
