function binarySearch(arr, k) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === k) {
            return true;
        } else if (arr[mid] < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 5;
const found = binarySearch(arr, k);

if (found) {
    console.log(`${k} znajduje się w tablicy.`);
} else {
    console.log(`${k} nie znajduje się w tablicy.`);
}
