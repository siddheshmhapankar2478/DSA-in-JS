const findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0,
    currentCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) currentCount++;
    else currentCount = 0;
    if (currentCount > maxCount) maxCount = currentCount;
  }
  return maxCount;
};
