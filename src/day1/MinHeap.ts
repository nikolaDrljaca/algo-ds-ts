export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.bubbleUp(this.length);
    this.length++;
  }
  delete(): number {
    if (this.length === 0) {
      return -1;
    }
    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }
    this.data[0] = this.data[this.length];
    this.bubbleDown(0);
    return out;
  }

  //we will need some private methods
  //bubbleUp, bubbleDown, and index formulas
  private bubbleDown(idx: number) {
    const rightIdx = this.rightIdx(idx);
    const leftIdx = this.leftIdx(idx);

    if (idx === this.length || leftIdx >= this.length) {
      return;
    }

    const leftVal = this.data[leftIdx];
    const rightVal = this.data[rightIdx];
    const value = this.data[idx];

    if (rightVal > leftVal && value > leftVal) {
      this.data[idx] = leftVal;
      this.data[leftIdx] = value;
      this.bubbleDown(leftIdx);
    } else if (leftVal > rightVal && value > rightVal) {
      this.data[idx] = rightVal;
      this.data[rightIdx] = value;
      this.bubbleDown(rightIdx);
    }
  }

  private bubbleUp(idx: number) {
    if (idx === 0) {
      return;
    }
    const pIdx = this.parendIdx(idx);
    const parentValue = this.data[pIdx];
    const value = this.data[idx];

    if (value < parentValue) {
      //swap
      const temp = this.data[pIdx];
      this.data[pIdx] = this.data[idx];
      this.data[idx] = temp;

      this.bubbleUp(pIdx);
    }
  }

  private parendIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftIdx(idx: number): number {
    return 2 * idx + 1;
  }

  private rightIdx(idx: number): number {
    return 2 * idx + 2;
  }
}
