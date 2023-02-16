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
      list += current.value + " → ";
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

function numToLinkedListinReverse(linkedList, sum) {
  sum = String(sum);
  let count = 0;
  while (count < sum.length) {
    linkedList.insertAtHead(sum[count]);
    count++;
  }
  return linkedList;
}

function numToLinkedList(linkedList, sum) {
  sum = String(sum);
  let count = 0;
  while (count < sum.length) {
    linkedList.insertAtLast(sum[count]);
    count++;
  }
  return linkedList;
}

function task1() {
  const l1 = new SlinkedList();
  const l2 = new SlinkedList();
  const sumList = new SlinkedList();

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let list1 = document.getElementById("list1");
  let list2 = document.getElementById("list2");
  let addition = document.getElementById("addition");
  let sum = document.getElementById("sumList");

  const ll1 = numToLinkedListinReverse(l1, num1);
  const ll2 = numToLinkedListinReverse(l2, num2);

  list1.innerText = ` ${ll1.print()}`;
  list2.innerText = ` ${ll2.print()}`;

  num1 = tointeger(ll1);
  num2 = tointeger(ll2);

  addition.innerText = ` =  ${num1} + ${num2} = ${num1 + num2} `;

  const sumll = numToLinkedListinReverse(sumList, num1 + num2);
  sum.innerText = ` ${sumll.print()}`;
}

function task2() {
  const l1 = new SlinkedList();
  const l2 = new SlinkedList();
  const sumList = new SlinkedList();

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let list1 = document.getElementById("list1");
  let list2 = document.getElementById("list2");
  let addition = document.getElementById("addition");
  let sum = document.getElementById("sumList");

  const ll1 = numToLinkedList(l1, num1);
  const ll2 = numToLinkedList(l2, num2);

  list1.innerText = ` ${ll1.print()}`;
  list2.innerText = ` ${ll2.print()}`;

  num1 = tointeger(ll1);
  num2 = tointeger(ll2);

  addition.innerText = ` =  ${num1} + ${num2} = ${num1 + num2} `;

  const sumll = numToLinkedList(sumList, num1 + num2);
  sum.innerText = ` ${sumll.print()}`;
}
