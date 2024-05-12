function mergeSortedArrays(left, right) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function sortHill(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return mergeSortedArrays(sortHill(left), sortHill(right));
}

const arr = [3, 5, 6, 8, 4, 3, 1];
const sortedHill = sortHill(arr);
console.log(`Posortowana górka: [${sortedHill}]`);
