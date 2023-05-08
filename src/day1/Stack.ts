type SNode<T> = {
  data: T;
  next?: SNode<T>;
};

export default class Stack<T> {
  public length: number;

  private head?: SNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node = { data: item } as SNode<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }
  pop(): T | undefined {
    if (!this.head) {
      this.length = 0;
      return undefined;
    }

    const data = this.head.data;

    if (this.length === 1) {
      this.head = undefined;
      this.length = 0;
      return data;
    }

    this.head = this.head.next;
    this.length--;
    return data;
  }
  peek(): T | undefined {
    return this.head?.data;
  }
}
