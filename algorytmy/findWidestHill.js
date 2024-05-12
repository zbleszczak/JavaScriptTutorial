function findWidestHill(arr) {
    let maxHillWidth = 0;
    let start = 0;
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

        const hillWidth = downhillEnd - uphillStart + 1;
        if (hillWidth > maxHillWidth) {
            maxHillWidth = hillWidth;
            start = uphillStart;
        }
    }

    return arr.slice(start, start + maxHillWidth);
}

const arr = [3, 6, 1, 5, 7, 8, 4, 3, 2, 6, 7, 1, 5, 9];
const widestHill = findWidestHill(arr);
console.log(`Najszersza górka: [${widestHill}]`);
