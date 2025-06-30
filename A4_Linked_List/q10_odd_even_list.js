const oddEvenList = function (head) {
  if (head === null || head.next === null) return head;
  let oddHead = null,
    oddTail = null;
  let evenHead = null,
    evenTail = null;
  let curr = head;
  let index = 1;
  while (curr !== null) {
    if (index % 2 === 1) {
      if (oddHead === null && oddTail === null) {
        oddHead = curr;
        oddTail = curr;
      } else {
        oddTail.next = curr;
        oddTail = curr;
      }
    } else {
      if (evenHead === null && evenTail === null) {
        evenHead = curr;
        evenTail = curr;
      } else {
        evenTail.next = curr;
        evenTail = curr;
      }
    }
    curr = curr.next;
    index++;
  }
  if (evenTail) evenTail.next = null;
  oddTail.next = evenHead;
  return oddHead;
};
