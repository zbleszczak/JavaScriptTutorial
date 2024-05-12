function findClosestNumber(k, arr) {
    let closest = arr[0];
    let minDifference = Math.abs(k - closest);

    for (let i = 1; i < arr.length; i++) {
        const difference = Math.abs(k - arr[i]);
        if (difference < minDifference) {
            minDifference = difference;
            closest = arr[i];
        }
    }

    const position = arr.indexOf(closest);

    return { number: closest, position };
}

const arr = [1, 3, 5, 7, 9, 11];
const k = 8;
const result = findClosestNumber(k, arr);
console.log(`Najbliższa liczba to: ${result.number}, pozycja: ${result.position}`);
