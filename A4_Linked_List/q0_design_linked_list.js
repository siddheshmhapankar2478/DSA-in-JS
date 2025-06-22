function Node(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  let curr = this.head;
  if (curr === null || index >= this.size) return -1;
  while (index > 0) {
    curr = curr.next;
    index--;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (this.head === null) this.head = newNode;
  else {
    let curr = this.head;
    while (curr.next !== null) curr = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex1 = function (index, val) {
  if (index > this.size) return;
  const newNode = new Node(val);
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let curr = this.head;
    let prev = null;
    while (index > 0) {
      prev = curr;
      curr = curr.next;
      index--;
    }
    prev.next = newNode;
    newNode.next = curr;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  const newNode = new Node(val);
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex1 = function (index) {
  if (this.head === null || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    let prev = null;
    while (index > 0) {
      prev = curr;
      curr = curr.next;
      index--;
    }
    prev.next = curr.next;
  }
  this.size--;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.head === null || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

const list = new MyLinkedList();
const node1 = new Node(10);
const node2 = new Node(10);
const node3 = new Node(10);
node1.next = node2;
node2.next = node3;

list.addAtHead(9);
console.log("data->", list.get(1));
list.addAtIndex(1, 1);
list.addAtIndex(1, 7);
list.deleteAtIndex(1);
list.addAtHead(7);
list.addAtHead(4);
list.deleteAtIndex(1);
list.addAtIndex(1, 4);
list.addAtHead(2);
list.deleteAtIndex(5);

let curr = list.head;
while (curr !== null) {
  console.log(curr.val);
  curr = curr.next;
}
