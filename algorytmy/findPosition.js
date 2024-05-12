

function findPosition(n, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 3, 5, 7, 9, 11];
const n = 5;
const position = findPosition(n, arr);
console.log(`Pozycja liczby ${n} w tablicy to: ${position}`);
