const isPowerOfTwo1 = function (n) {
  return recursion(1, n);
};

const recursion = (num, n) => {
  if (n % 2 === 1 || num > n) return false;
  if (num === n) return true;
  return recursion(num * 2, n);
};

const isPowerOfTwo2 = function (n) {
  if (n === 1) return true;
  if (n < 1 || n % 2 === 1) return false;
  return isPowerOfTwo(n / 2);
};

const isPowerOfTwo = function (n) {
  if (n == 0 || n === -Math.pow(2, 31)) return false;
  return (n & (n - 1)) === 0;
};
