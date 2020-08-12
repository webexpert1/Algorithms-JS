// pseudocode pop
/* if there are no nodes in the list, return undefined
loop through the list unitl you reach the tail
set the next property of the 2nd to the last node to be null
set the tail to be the 2nd to the last node
decrement the length of the list by 1
return the value the node removed 
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(item) {
        var newNode = new Node(item);
       if(!this.head) {
            this.head = new Node(item);
            this.tail = this.head;
       } else {
        //    this.head = new Node(item);
           this.tail.next = newNode;
           this.tail = newNode; 
       }
       this.length++;
       return this;
    }

    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;

    }
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(item) {
        let newNode = new Node(item);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList();
list.push('hi');
list.push('there');

console.log(list)