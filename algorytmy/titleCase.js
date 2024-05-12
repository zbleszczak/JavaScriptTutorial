
function titleCase(text) {
    const words = text.split(" ");
    const titleCaseWords = [];

    for (const word of words) {
        if (word.length > 0) {
            const firstLetter = word[0].toUpperCase();  // pierwsza litera slowa zmieniana na duza litere
            const restOfWord = word.slice(1).toLowerCase(); // reszte na male litery
            titleCaseWords.push(firstLetter + restOfWord);
        }
    }

    return titleCaseWords.join(" ");
}

const textToChange = "ide dzisiaj na spacer";
const capitalLetter = titleCase(textToChange);

console.log(capitalLetter);
