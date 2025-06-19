const removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[x++] = nums[i];
  }
  return x;
};

const nums = [3, 4, 5, 2, 1, 0, 3, 4, 2, 3],
  val = 3;
removeElement(nums, val);
