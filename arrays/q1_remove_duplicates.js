const removeDuplicates = function (nums) {
  let left = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[left] === nums[i]) continue;
    else nums[++left] = nums[i];
  }
  return left + 1;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
removeDuplicates(nums);

//REturn array of duplicate elements
const findDuplicates = function (nums) {
  let temp = nums[0];
  const ans = [];
  for (let i = 1; i < nums.length; i++) {
    if (temp != nums[i]) temp = nums[i];
    else {
      if (ans.length && ans[ans.length - 1] === nums[i]) continue;
      else ans.push(temp);
    }
  }
  console.log({ ans });
  return ans;
};
const arr = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
// const arr = [0, 1, 2, 3, 4];
findDuplicates(arr);
