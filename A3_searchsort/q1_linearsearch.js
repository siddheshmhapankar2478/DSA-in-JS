const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

const nums = [1, 34, 5, 67, 83, 98, 77, 6, 9, 10];
const target = 77;
console.log({ linearSearch: linearSearch(nums, target) });
