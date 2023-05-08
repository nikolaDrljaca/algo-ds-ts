export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    return linearSearch(haystack, needle);
}

function linearSearch(haystack: number[], needle: number): boolean {
    const n = haystack.length;
    for (let index = 0; index < n; index++) {
        const element = haystack[index];
        if (element === needle) return true;
    }

    return false;
}
