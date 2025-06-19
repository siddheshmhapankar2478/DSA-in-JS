const singleNumber1 = function (nums) {
  const n = nums.length;
  let hashMap = {};
  for (let i = 0; i < n; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;
  }
  let ans = 0;
  Object.entries(hashMap).forEach(([key, value]) => {
    if (value === 1) ans = Number(key);
  });
  return ans;
};

const singleNumber = function (nums) {
  const n = nums.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
