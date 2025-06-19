//Infinite recursion
const recursion = () => {
  console.log("recursion");
  recursion();
};

// recursion();

const printNto1 = (n) => {
  if (n == 0) return;
  console.log(n);
  printNto1(n - 1);
};
// printNto1(5);

const print1toN = (num, n) => {
  if (num > n) return;
  console.log(num);
  print1toN(num + 1, n);
};

print1toN(1, 5);

const sum1toN = (n) => {
  if (n === 0) return 0;
  return n + sum1toN(n - 1);
};
console.log({ sum1toN: sum1toN(5) });

const sumofArray = (nums, index) => {
  if (index === nums.length) return 0;
  return nums[index] + sumofArray(nums, index + 1);
};
// const nums = [1, 3, 2, 4, 7, 3, 10, 30, 40];
// console.log({ sumofArray: sumofArray(nums, 0) });

const factorial = (n) => {
  if (n === 0 || n == 1) return 1;
  return n * factorial(n - 1);
};
console.log({ factorial: factorial(5) });

const sumOfOddNum = (nums, i) => {
  if (i === nums.length) return 0;
  let sum = 0;
  if (nums[i] % 2 === 1) sum = nums[i];
  return sum + sumOfOddNum(nums, i + 1);
};
const nums = [10, 7, 20, 7, 3, 5, 9, 5, 1];
console.log({ sumOfOddNum: sumOfOddNum(nums, 0) });
