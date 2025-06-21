const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const findMinIndex = (nums, start, end) => {
  let minIndex = start;
  for (let i = start; i <= end; i++) {
    if (nums[i] < nums[minIndex]) minIndex = i;
  }
  return minIndex;
};

const selectionSort = (nums) => {
  const n = nums.length;
  for (let pass = 0; pass < n - 1; pass++) {
    let minIndex = findMinIndex(nums, pass, n - 1);
    if (minIndex !== pass) swap(nums, pass, minIndex);
    console.log(pass, nums);
  }
  return nums;
};
const nums = [7, 1, 5, 4, 3, 2];
console.log({ selectionSort: selectionSort(nums) });
