class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SlinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtHead(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  insertAtLast(value) {
    const newNode = new Node(value);
    let current = this.head;
    if (this.head == null) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  print() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.value + " -> ";
      current = current.next;
    }
    return `${list}Null`;
  }
}

// to integer in reversez
function tointegerInReverse(ll) {
  let current = ll.head;
  let num = "";
  while (current) {
    num = current.value + num;
    current = current.next;
  }
  return Number(num);
}

//to integer in order
function tointeger(ll) {
  let current = ll.head;
  let num = "";
  while (current) {
    num += current.value;
    current = current.next;
  }
  return Number(num);
}

//
const l1 = new SlinkedList();
l1.insertAtHead(7);
l1.insertAtLast(1);
l1.insertAtLast(6);

const l2 = new SlinkedList();
l2.insertAtHead(5);
l2.insertAtLast(9);
l2.insertAtLast(2);

//

//
const sumLinkedListInReverse = new SlinkedList();
const sumLinkedList = new SlinkedList();

function sumToLinkedListinReverse(linkedList, sum) {
  sum = String(sum);
  let count = 0;
  while (count < sum.length) {
    linkedList.insertAtHead(sum[count]);
    count++;
  }
  return linkedList.print();
}

function sumToLinkedList(linkedList, sum) {
  sum = String(sum);
  let count = 0;
  while (count < sum.length) {
    linkedList.insertAtLast(sum[count]);
    count++;
  }
  return linkedList.print();
}

const list1 = l1.print();
const num1 = tointegerInReverse(l1);
console.log("Task 1 :In Reverse Order");
console.log(`List 1:`, list1);
console.log(`Number 1: ${num1}`);

const list2 = l2.print();
const num2 = tointegerInReverse(l2);
console.log(`List 2:`, list2);
console.log(`Number 2: ${num2}`);

const sumInReverse = tointegerInReverse(l1) + tointegerInReverse(l2);
console.log("Sum = ", sumInReverse);

const sumRevList = sumToLinkedListinReverse(
  sumLinkedListInReverse,
  sumInReverse
);
console.log("Sum Linked list: ", sumRevList);
/////

console.log("Task 2 :In Order");
console.log(`List 1:`, l1.print());
console.log(`Number 1: ${tointeger(l1)}`);

console.log(`List 2:`, l2.print());
console.log(`Number 2: ${tointeger(l2)}`);

const sumInOrder = tointeger(l1) + tointeger(l2);
console.log("Sum = ", sumInOrder);

const sumList = sumToLinkedList(sumLinkedList, sumInOrder);
console.log("Sum Linked list: ", sumList);
