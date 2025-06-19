const binarySearch = (nums, target) => {
  let start = 0,
    end = nums.length - 1;
  let ans = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return ans;
};

const nums = [1, 34, 50, 67, 83, 98, 177, 186, 199, 310];
const target = 199;
console.log({ binarySearch: binarySearch(nums, target) });
