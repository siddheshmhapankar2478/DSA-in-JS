const moveZeroes = function (nums) {
  let j = 0,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] != 0) nums[j++] = nums[i];
  }
  while (j < n) {
    nums[j++] = 0;
  }
};
const nums = [0, 1, 0, 3, 13, 0];
moveZeroes(nums);
