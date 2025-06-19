const missingNumber = function (nums) {
  const n = nums.length;
  const nSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
  }
  return nSum - sum;
};

const nums = [0, 3, 1];
missingNumber(nums);
