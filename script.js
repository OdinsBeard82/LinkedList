class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

//insert first Node
insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
}

//insert last Node
insertLast(value) {
    let node = new Node(value);
    let current;
    if(!this.head) {
        this.head = node;
    } else {
        current = this.head;

        while(current.next) {
            current = current.next;
        }

        current.next = node;
    }
    this.size++;
}
//insert at index
insertAt(value, index) {
    //if index is out of range
    if(index > 0 && index > this.size) {
        return;
    }
//if first index
    if(index === 0) {
        this.head = new Node(value, this.head);
        return; 
        }

    const node = new Node(value);
    let current, previous;

    //  set current to first
    current = this.head;
    let count = 0;

    while(count < index) {
        previous = current; // node before index
        count++;
        current = current.next; //node after index
    
    }
    node.next = current;
    previous.next = node;

    this.size++;
}

//get at index
getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
        if(count == index) {
        console.log(current.value);
    }
    count++;
    current = current.next;
}
  return null;
}


//remove at index
reomoveAt(index) {
    if(index > 0 && index > this.size){
        return;
    }

    let current  = this.head;
    let previous;
    let count = 0;

    //remove first
    if(index === 0) {
        this.head = current.next;
    } else {
        while(count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        }
        this.size--;
    }

//clear list
clearList() {
    this.head = null;
    this.size--;
    return;
}


    // remove last
removeLast() {
    if (this.head == null) {
    console.log("list is already empty");
    return;
} else if (this.head.next == null) {
//If there is only one node in the list
    this.head = null;
    this.size--;
    return;

}

let current = this.head;
let previous = null;

while (current.next) {
//move through to the last node
    previous = current;
    current = current.next;
}
 
//set the previous node to null
previous.next = null;
// decreases the value of the size property of the linked list by 1.
this.size--;

}



printListValue() {
    let current = this.head;

    while(current) {
        console.log(current.value);
        current = current.next;
    }

}
}

const ll = new linkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);





//ll.getFirst();
//ll.getAt(10);
ll.printListValue();