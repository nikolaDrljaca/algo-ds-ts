type Node<T> = {
  data: T;
  next?: Node<T>;
  prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(item: T): void {
    const node = { data: item } as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      return;
    } else if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }
    const node = { data: item } as Node<T>;
    let temp = this.head;
    for (let i = 0; i < idx && temp; i++) {
      temp = temp.next;
    }
    temp = temp as Node<T>;

    node.next = temp;
    node.prev = temp.prev;
    temp.prev = node;
    if (node.prev) {
      node.prev.next = temp;
    }
    this.length++;
  }
  append(item: T): void {
    const node = { data: item } as Node<T>;
    this.length++;
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
      return;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      const data = this.head.data;
      this.head = this.tail = undefined;
      this.length--;
      return data;
    }
    let temp = this.head;
    while (temp.data !== item && temp.next) {
      temp = temp.next;
    }
    if (!temp.next) {
      return undefined;
    }
    const data = temp.data;

    if (temp.prev) {
      temp.prev.next = temp.next;
    }
    if (temp.next) {
      temp.next.prev = temp.prev;
    }

    if (temp === this.head) {
      this.head = temp.next;
    }
    if (temp === this.tail) {
      this.tail = temp.prev;
    }

    this.length--;
    return data;
  }
  get(idx: number): T | undefined {
    let temp = this.head;
    for (let i = 0; i < idx && temp; i++) {
      temp = temp.next;
    }
    return temp?.data;
  }
  removeAt(idx: number): T | undefined {
    const temp = this.get(idx);
    if (!temp) {
      return undefined;
    }
    return this.remove(temp);
  }
}
