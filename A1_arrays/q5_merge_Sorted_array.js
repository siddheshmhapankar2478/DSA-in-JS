const merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;
  m = m - 1;
  n = n - 1;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) nums1[last--] = nums1[m--];
    else nums1[last--] = nums2[n--];
  }
  while (m >= 0) nums1[last--] = nums1[m--];
  while (n >= 0) nums1[last--] = nums2[n--];
};

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
merge(nums1, nums1.length, nums2, nums2.length);
