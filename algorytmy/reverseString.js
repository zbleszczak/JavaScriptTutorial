function reverseString(text) {
    const reversedText = text.split("").reverse().join("");
    return reversedText;
}

const originalText = "niedziela";
const reversedText = reverseString(originalText);

console.log(reversedText); 