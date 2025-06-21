const mergeSort = (nums) => {
  const n = nums.length;
  if (n === 1) return nums;
  const mid = Math.floor(n / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
};

const merge = (nums1, nums2) => {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const ans = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < n1 && j < n2) {
    console.log({ i, j, ans });
    if (nums1[i] < nums2[j]) ans[k++] = nums1[i++];
    else ans[k++] = nums2[j++];
  }

  while (i < n1) ans[k++] = nums1[i++];

  while (j < n2) ans[k++] = nums2[j++];

  return ans;
};
const nums1 = [3, 4, 7, 8];
const nums2 = [1, 2, 4, 6];
console.log({ merge: merge(nums1, nums2) });

const nums = [1, 8, 3, 2, 7, 6, 9, 4];
console.log({ mergeSort: mergeSort(nums) });
