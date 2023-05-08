type Node<T> = {
  data: T;
  next?: Node<T>;
};

export default class SinglyLinkedList<T> {
  public length: number;

  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    this.length++;
    const node = { data: item } as Node<T>;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
    return;
  }
  insertAt(item: T, idx: number): void {
    const node = { data: item } as Node<T>;
    if (this.length - 1 > idx) {
      return;
    }
    if (!this.head) {
      this.length++;
      this.head = this.tail = node;
      return;
    }
    let tempIdx = 0;
    let temp = this.head;
    while (tempIdx < idx - 1 && temp.next) {
      tempIdx++;
      temp = temp.next;
    }
    const previous = temp;
    node.next = previous.next;
    temp.next = node;
    this.length++;
  }
  append(item: T): void {
    this.length++;
    const node = { data: item } as Node<T>;
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  remove(item: T): T | undefined {
    if (!this.tail || !this.head) {
      return undefined;
    }
    if (this.length === 1) {
      const data = this.head.data;
      this.length--;
      this.head = this.tail = undefined;
      return data;
    }
    if (this.head.data === item) {
      const data = this.head.data;
      this.length--;
      this.head = this.head.next;
      return data;
    }
    let temp = this.head;
    while (temp.next && temp.next.data !== item) {
      temp = temp.next;
    }
    if (!temp || !temp.next) {
      return undefined;
    }
    const actual = temp.next;
    const data = actual!.data;
    temp.next = actual!.next;
    actual!.next = undefined;
    this.length--;
    return data;
  }
  get(idx: number): T | undefined {
    // if (idx === 0) return this.head?.data;
    // if (idx === this.length - 1) return this.tail?.data;
    // if (this.length - 1 < idx) {
    //   return undefined;
    // }
    // if (!this.head && !this.tail) {
    //   return undefined;
    // }
    //
    // let counter = 0;
    // let temp = this.head;
    // while (counter !== idx && temp) {
    //   counter++;
    //   temp = temp.next;
    // }
    // if (!temp) {
    //   return undefined;
    // }
    //
    // return temp.data;
    //
    let temp = this.head;
    for (let i = 0; i < idx && temp; i++) {
      temp = temp.next;
    }
    return temp?.data;
  }
  removeAt(idx: number): T | undefined {
    const data = this.get(idx);
    if (!data) {
      return undefined;
    }
    return this.remove(data);
  }
}
