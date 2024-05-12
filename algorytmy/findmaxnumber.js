function findMaxNumber(numbers) {
    let max = numbers[0]; 

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 

        }
    }

    return max;
}

const numbersList = [1, 12, 3, 34, 25, 63, 22];
const maxNumber = findMaxNumber(numbersList);


console.log("Największa liczba w tablicy to:", maxNumber);