

function functionBinSearch(arr, x, start, end, exec = 0) {

    console.log(exec++,'executions')
    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return functionBinSearch(arr, x, start, mid - 1, exec);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return functionBinSearch(arr, x, mid + 1, end, exec);
}

export const mainBinarySearch = () => {
    console.clear()
    console.group('Binary serach')
    let arr =  Array.from({ length: 150 }, (_, i) => i);
    let x = 75;
    console.table(arr);
    console.log(x,'element to find')

    functionBinSearch(arr, x, 0, arr.length - 1)
    console.groupEnd()
}




