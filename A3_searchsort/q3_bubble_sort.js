const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const bubbleSort = (nums) => {
  const n = nums.length;
  for (let pass = 0; pass < n - 1; pass++) {
    let swapOccured = false;
    for (let i = 0; i < n - pass - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swapOccured = true;
        swap(nums, i, i + 1);
      }
      console.log(pass, i, nums);
    }
    if (!swapOccured) return nums;
  }
  return nums;
};
const nums = [1, 2, 3, 4, 5];
// const nums = [5, 2, 1, 3, 4];
// const nums = [5, 2, 4, 1];
console.log({ bubbleSort: bubbleSort(nums) });
