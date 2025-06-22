const removeNthFromEnd = function (head, n) {
  let curr = head,
    length = 0;
  while (curr !== null) {
    curr = curr.next;
    length++;
  }
  let indexFromStart = length - n;
  if (indexFromStart === 0) return head.next;
  curr = head;
  for (let i = 0; i < indexFromStart - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
};
