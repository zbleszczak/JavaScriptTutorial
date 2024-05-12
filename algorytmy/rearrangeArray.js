function rearrangeArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] >= 0 && arr[right] < 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else {
            if (arr[left] < 0) {
                left++;
            }
            if (arr[right] >= 0) {
                right--;
            }
        }
    }
    return arr;
}

const arr = [-3, 4, -1, 2, -5, 7, -2, 9];
const rearrangedArr = rearrangeArray(arr);
console.log(`Tablica po zamianie: [${rearrangedArr}]`);
