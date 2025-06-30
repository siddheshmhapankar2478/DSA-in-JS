const removeNthFromEnd = function (head, n) {
  let count = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }
  let nodeFromStart = count - n - 1;
  if (nodeFromStart < 0) return head.next;
  curr = head;
  while (nodeFromStart > 0) {
    curr = curr.next;
    nodeFromStart--;
  }
  curr.next = curr.next.next;
  return head;
};
