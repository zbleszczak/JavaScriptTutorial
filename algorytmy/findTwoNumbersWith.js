function findTwoNumbersWithSumK(k, arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === k) {
            return [arr[left], arr[right]];
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}

const arr = [2, 3, 5, 7, 9, 11];
const k = 12;
const result = findTwoNumbersWithSumK(k, arr);
if (result) {
    console.log(`Liczby o sumie ${k} to: ${result[0]} i ${result[1]}`);
} else {
    console.log(`Nie znaleziono dwóch liczb o sumie ${k}`);
}
