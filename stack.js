/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val)
    if(this.size == 0){
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size == 0){
      throw console.error("error")
    }
    if(this.first.next == null){
      let currentNode = this.first
      this.first = null
      this.size -= 1
      return currentNode.val
    }
    let currentNode = this.first
    while(currentNode.next.next != null){
      currentNode = currentNode.next
    }
    let tempNode = currentNode.next.val
    this.last = currentNode
    currentNode.next = null
    this.size -= 1
    return tempNode

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(this.size > 0){
      return this.last.val
    }
    
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size == 0
}

module.exports = Stack;
