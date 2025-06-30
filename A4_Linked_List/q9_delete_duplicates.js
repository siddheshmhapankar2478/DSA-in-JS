const deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;
  let ansHead = head,
    ansTail = head;
  let curr = head.next;
  while (curr !== null) {
    if (curr.val !== ansTail.val) {
      ansTail.next = curr;
      ansTail = curr;
    }
    curr = curr.next;
  }
  ansTail.next = null;
  return ansHead;
};
