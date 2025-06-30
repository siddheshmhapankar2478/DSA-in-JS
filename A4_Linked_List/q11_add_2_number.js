const addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let ansHead = null,
    ansTail = null;
  let p1 = l1,
    p2 = l2;
  while (p1 !== null || p2 !== null) {
    const num1 = p1?.val || 0;
    const num2 = p2?.val || 0;
    let sum = num1 + num2 + carry;
    let digit = sum % 10;
    if (sum > 9) carry = 1;
    else carry = 0;
    const newNode = new ListNode(digit);
    if (ansHead === null && ansTail === null) {
      ansHead = newNode;
      ansTail = newNode;
    } else {
      ansTail.next = newNode;
      ansTail = newNode;
    }
    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }
  if (carry > 0) {
    const newNode = new ListNode(carry);
    ansTail.next = newNode;
    ansTail = newNode;
  }
  if (ansTail) ansTail.next = null;
  return ansHead;
};
