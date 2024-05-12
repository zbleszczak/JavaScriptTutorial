function findLongestIncreasingSubarray(arr) {
    let start = 0;
    let maxLen = 0;
    let maxLengthStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            if (i - start + 1 > maxLen) {
                maxLen = i - start + 1;
                maxLengthStart = start;
            }
        } else {
            start = i;
        }
    }

    return arr.slice(maxLengthStart, maxLengthStart + maxLen);
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18];
const longestIncreasingSubarray = findLongestIncreasingSubarray(arr);
console.log(`Najdłuższy rosnący podciąg to: [${longestIncreasingSubarray}]`);
