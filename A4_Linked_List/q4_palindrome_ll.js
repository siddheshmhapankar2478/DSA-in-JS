// var isPalindrome = function (head) {
//   if (head === null || head.next === null) return true;
//   const array = [];
//   let curr = head;
//   while (curr !== null) {
//     array.push(curr.val);
//     curr = curr.next;
//   }
//   return checkPalindrome(array);
// };
// const checkPalindrome = (nums) => {
//   const n = nums.length;
//   let start = 0,
//     end = n - 1;
//   while (start < end) {
//     if (nums[start] !== nums[end]) return false;
//     start++;
//     end--;
//   }
//   return true;
// };

const middleOfLL = (head) => {
  if (head === null || head.next === null) return head;
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const reverseOfLL = (head) => {
  if (head === null || head.next === null) return head;
  let curr = head,
    prev = null;
  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
};

const isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  const middleNode = middleOfLL(head);
  const reverse = reverseOfLL(middleNode);
  let curr = head,
    rev = reverse;
  while (curr !== null && rev !== null) {
    if (curr.val !== rev.val) return false;
    curr = curr.next;
    rev = rev.next;
  }
  return true;
};
