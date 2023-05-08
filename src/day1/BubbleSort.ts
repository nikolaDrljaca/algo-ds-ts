//
//The classic, most simple sorting algo out there. Running time O(n^2)
//Keep attention to the inner loop, we subctract 1 to mitigate off by one errors
//or checking the element with itself.
//THIS IS DONE INPLACE.
//This means that the function is not returning a new array but rather mutating the contents
//of the current one to sort in place.
//NOTE: Sorting in general should be done in place using mutable data structures.
//If the DS is immutable, cast/convert it to mutable or create a mutable copy.
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
