const removeElements = function (head, val) {
  let ansHead = null;
  let ansTail = null;
  let curr = head;
  while (curr !== null) {
    if (curr.val !== val) {
      if (ansHead === null && ansTail === null) {
        ansHead = curr;
        ansTail = curr;
      } else {
        ansTail.next = curr;
        ansTail = curr;
      }
    }
    curr = curr.next;
  }
  if (ansTail) ansTail.next = null;
  return ansHead;
};
