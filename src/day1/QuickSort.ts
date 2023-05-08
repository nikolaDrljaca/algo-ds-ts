function qs(arr: number[], lo: number, hi: number) {
  //base case
  if (lo >= hi) {
    return;
  }
  const pivotIndex = partition(arr, lo, hi);

  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
}

//NOTE: does the sorting for the subarrays
function partition(arr: number[], lo: number, hi: number): number {
  //Arbitrary pick, easiest choice
  const pivot = arr[hi];

  //the pivot index
  //Will return this
  let idx = lo - 1;

  for (let index = lo; index < hi; index++) {
    if (arr[index] <= pivot) {
      idx++;
      const temp = arr[index];
      arr[index] = arr[idx];
      arr[idx] = temp;
    }
  }
  //NOTE: Now that we have the pivot index we need to do a swap here
  //to hold true to the everything before the pivot is smaller rule
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
