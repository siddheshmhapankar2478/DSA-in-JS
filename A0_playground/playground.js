//Count total number of negative elements
const countNegative = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }
  console.log("Total negative numbers=" + count);
  return count;
};

//Find max and min in array
const findMinMax = (arr) => {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(`Max= ${max} Min=${min}`);
  return { max, min };
};

// const arr = [1, -2, 3, -4, 50, -6, -7, 8, -4, -99, 9, 10];
// countNegative(arr);
// findMinMax(arr);

const findSecondLargest = (arr) => {
  let max = -Infinity,
    secMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax) {
      secMax = arr[i];
    }
  }
  console.log("Second max=" + secMax);
  return secMax;
};

// const arr = [10, 70, 60, 80, 90, 40, 100, 100, 30];
// findSecondLargest(arr);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i=", i, "j=", j);
  }
}

//Count number of digits in a number
const countDigits = (n) => {
  let count = 0;
  if (n == 0) return 1;
  if (n < 0) n = -n;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
};
console.log({ countDigits: countDigits(-259) });


const palindrome = (word) => {
  let start = 0,
    end = word.length - 1;
  while (start < end) {
    if (word.charAt(start) === word.charAt(end)) {
      start++;
      end--;
    } else return false;
  }
  return true;
};
console.log({ checkPalindrome: palindrome("nayan") });

const reverseNumber = (num) => {
  let reverse = 0;
  if (num == 0) return num;
  if (num < 0) num = -num;

  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reverse;
};
console.log({ reverseNumber: reverseNumber(1234) });
