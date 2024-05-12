function findSubarrayWithSumK(arr, k) {
    let i = 0;
    let j = 0;
    let currentSum = arr[i];

    while (j < arr.length) {
        if (currentSum === k) {
            return [i, j];
        } else if (currentSum < k) {
            j++;
            currentSum += arr[j];
        } else {
            currentSum -= arr[i];
            i++;
        }
    }

    return null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 10;
const subarray = findSubarrayWithSumK(arr, k);

if (subarray) {
    console.log(`Znaleziono fragment o sumie ${k} od indeksu ${subarray[0]} do ${subarray[1]}`);
} else {
    console.log(`Nie znaleziono fragmentu o sumie ${k}`);
}
