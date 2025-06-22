const middleNode1 = function (head) {
  let curr = head,
    count = 0;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }
  curr = head;
  const mid = Math.floor(count / 2);
  for (let i = 0; i < mid; i++) {
    curr = curr.next;
  }
  return curr;
};

const middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
