class SimpleLinkedList {
  constructor() {
    this.nodes = 0;
    this.h = null;
  }
  
  push(n) {
    let ele = new Element(n, this.h);
    this.h = ele;
    this.nodes++;
  }
  
  pop() {
    if (this.nodes === 0) return null;
    
    let p = this.h;
    this.h = p.nextNode;
    this.nodes--;
    return p.data;
  }
  
  size() {
    return this.nodes;
  }
  
  isEmpty() {
    return this.nodes === 0;
  }
  
  head() {
    return this.h;
  }
  
  peek() {
    return this.h ? this.h.data : null;
  }
  
  toArray() {
    let result = [];
    let p = this.h;
    
    while (p) {
      result.push(p.data);
      p = p.nextNode;
    }
    
    return result;
  }
  
  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }
  
  static fromArray(arr) {
    let list = new SimpleLinkedList();
    if (arr !== null)
      arr.slice().reverse().forEach(n => list.push(n));
    return list;
  }
}

class Element {
  constructor(data, next = null) {
    this.data = data;
    this.nextNode = next;
  }
  
  datum() {
    return this.data;
  }
  
  next() {
    return this.nextNode;
  }
  
  isTail() {
    return this.nextNode === null;
  }
}

module.exports = {SimpleLinkedList, Element};
