const reverseList1 = function (head) {
  if (head === null || head.next === null) return head;
  let prev = null,
    curr = head,
    nxt = head.next;
  while (curr !== null) {
    curr.next = prev;
    prev = curr;
    curr = nxt;
    if (nxt !== null) nxt = nxt.next;
  }
  return prev;
};

const reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let prev = null,
    curr = head;
  while (curr !== null) {
    const nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
};
