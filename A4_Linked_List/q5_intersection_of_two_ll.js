const getIntersectionNode1 = function (headA, headB) {
  const linkedListSet = new Set();
  let tempA = headA,
    tempB = headB;
  while (tempA != null) {
    linkedListSet.add(tempA);
    tempA = tempA.next;
  }
  while (tempB != null) {
    if (linkedListSet.has(tempB)) return tempB;
    tempB = tempB.next;
  }
  return null;
};

var getIntersectionNode = function (headA, headB) {
  let tempA = headA,
    tempB = headB;
  let countA = 0,
    countB = 0;

  while (tempA != null) {
    countA++;
    tempA = tempA.next;
  }
  while (tempB != null) {
    countB++;
    tempB = tempB.next;
  }

  let difference = Math.abs(countA - countB);
  tempA = headA;
  tempB = headB;

  if (countA > countB) {
    while (difference > 0) {
      tempA = tempA.next;
      difference--;
    }
  } else {
    while (difference > 0) {
      tempB = tempB.next;
      difference--;
    }
  }

  while (tempA != null && tempB != null) {
    if (tempA === tempB) return tempA;
    tempA = tempA.next;
    tempB = tempB.next;
  }

  return null;
};
