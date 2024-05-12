function findHillHeight(arr) {
    let height = 0;
    let i = 1;

    while (i < arr.length - 1) {
        while (i < arr.length - 1 && arr[i - 1] >= arr[i]) {
            i++;
        }

        const uphillStart = i - 1;

        while (i < arr.length - 1 && arr[i - 1] <= arr[i]) {
            i++;
        }

        const downhillEnd = i - 1;

        if (uphillStart < downhillEnd) {
            height++;
        }
    }

    return height;
}

const arr = [3, 6, 1, 5, 7, 8, 4, 3, 2, 6, 7, 1, 5, 9];
const hillHeight = findHillHeight(arr);
console.log(`Wysokość górki: ${hillHeight}`);
