class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SLL {
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
    if (current == null) {
      current = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.size++;
  }

  insertAtIndex(index, value) {
    const newNode = new Node(value);
    let current = this.head;
    let prev = current;
    let count = 0;
    if (index == 0) {
      this.insertAtHead(value);
    } else if (index > 0 && index > this.size) {
      return;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.size++;
  }
  printll() {
    let current = this.head;
    let Link = "";
    while (current !== null) {
      Link += current.value + " -> ";
      current = current.next;
    }
    console.log(`Linked List: ${Link}null`);
  }
}

const ll = new SLL();
ll.insertAtHead(1);
ll.insertAtLast(2);
ll.insertAtLast(3);
ll.insertAtLast(4);
ll.insertAtLast(5);
ll.printll();
//

console.log(ll.head.next.value);

const ll2 = new SLL();
ll2.insertAtHead(6);
ll2.insertAtLast(7);
ll2.insertAtLast(8);
ll2.printll();
//

function joinll(ll, ll2) {
  const sorted = new SLL();
  sorted.head = ll.head;
  let current = sorted.head;
  while (current.next) {
    current = current.next;
  }
  current.next = ll2.head;
  sorted.printll();
  return sorted;
}

joinll(ll, ll2);
