const insertionSort = (nums) => {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    const currentElement = nums[i];
    let j = i - 1;
    while (j >= 0) {
      if (currentElement < nums[j]) nums[j + 1] = nums[j];
      else break;
      j--;
    }
    nums[++j] = currentElement;
  }
  return nums;
};
const nums = [7, 1, 5, 4, 8, 3, 2];
console.log({ insertionSort: insertionSort(nums) });
