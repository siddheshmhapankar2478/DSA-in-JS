const hasCycle1 = function (head) {
  let curr = head;
  const linkedListSet = new Set();
  while (curr !== null) {
    if (linkedListSet.has(curr)) return true;
    linkedListSet.add(curr);
    curr = curr.next;
  }
  return false;
};

const hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
