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

  //   ////////////////////////////////////////////////
  //insert at begining

  insertAtHead(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  //Insert at last
  insertAtLast(value) {
    const newNode = new Node(value);
    let current = this.head;

    if (current == null) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  //Insert at index

  insertAtIndex(value, index) {
    const newNode = new Node(value);
    let current = this.head,
      prev = current,
      count = 0;
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
  }

  //Delete at index
  deleteAtindex(index) {
    let current = this.head;
    let prev = current,
      count = 0;
    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }

  //   ///////////////////////////////////////////////////////////////////////////

  reverse() {
    let current = this.head;
    let nextNode = current.next;

    while (nextNode) {
      let temp = nextNode.next;
      nextNode.next = current;
      current = nextNode;
      nextNode = temp;
    }

    this.head.next = null;
    this.head = current;
  }

  // search in LL
  search(value) {
    let current = this.head;
    let index = 0;
    let flag = false;
    while (current) {
      if (current.value == value) {
        console.log(value, " Found at index: ", index);
        flag = true;
      }
      index++;
      current = current.next;
    }
    if (!flag) {
      console.log(value, " Not found");
    }
  }

  //print
  printll() {
    let current = this.head;
    let Link = "";
    while (current !== null) {
      Link += current.value + " -> ";
      current = current.next;
    }
    console.log(`Linked List: ${Link}null`);
  }

  //print value at index
  valueAt(index) {
    let count = 0;
    let current = this.head;
    if (index == 0) {
      console.log(this.head);
    } else {
      while (count < index) {
        count++;
        current = current.next;
      }
      console.log(current.value);
    }
  }
}

const ll = new SLL();
ll.insertAtHead(100);
ll.insertAtHead(200);
ll.insertAtHead(300);
ll.insertAtHead(400);
ll.insertAtLast(500);
ll.insertAtIndex(35, 3);
ll.insertAtIndex(355, 0);
ll.printll();
ll.valueAt(4);
ll.deleteAtindex(4);
ll.printll();
ll.valueAt(4);
console.log("\n\nAfter reversing the Link list");
ll.reverse();
ll.printll();
