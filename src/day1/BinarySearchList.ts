export default function bs_list(haystack: number[], needle: number): boolean {
    return bs(haystack, needle);
}

//Uses recursion, not ideal cuz we are creating function calls on the stack
//Not only is the memory footprint bigger due to recursion, but slice() is also creating additional arrays.
function binarySearch(haystack: number[], needle: number): boolean {
    const middleIndex = Math.floor(haystack.length / 2);
    const value = haystack[middleIndex];
    if (value === needle) return true;
    if (value > needle) {
        return binarySearch(haystack.slice(0, middleIndex), needle);
    } else if (value < needle) {
        return binarySearch(
            haystack.slice(middleIndex + 1, haystack.length),
            needle,
        );
    } else {
        return false;
    }
}

//In memory implementation, just a while loop running and playing with the indicies of the array.
//The array itself is not actually being sliced.
function bs(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        const middleIndex = Math.floor(low + (high - low) / 2);
        const value = haystack[middleIndex];
        if (value === needle) return true;
        if (value > needle) {
            high = middleIndex;
        } else {
            low = middleIndex + 1;
        }
    }
    return false;
}
