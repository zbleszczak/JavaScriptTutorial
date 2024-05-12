function countHills(arr) {
    let count = 0;
    let i = 1;

    while (i < arr.length - 1) {
        while (i < arr.length - 1 && arr[i - 1] >= arr[i]) {
            i++;
        }

        while (i < arr.length - 1 && arr[i - 1] <= arr[i]) {
            i++;
        }

        count++;
    }

    return count;
}

const arr = [3, 6, 1, 5, 7, 8, 4, 3, 2, 6, 7, 1, 5, 9];
const hillCount = countHills(arr);
console.log(`Liczba górek w tablicy: ${hillCount}`);
