
function countOccurrences(text, letter) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            count++;
        }
    }

    return count;
}

const letterToFind = "e";
const textToSearch = "sloneczna niedziela";

const result = countOccurrences(textToSearch, letterToFind);
console.log("Litera '" + letterToFind + "' występuje w tekście " + result + " razy.");
