
function calculator(a, b, op) {
    let result;

    switch (op) {
        case 'add':
            result = a + b;
            console.log("Dodajesz liczby " + a + " oraz " + b);
            break;
        case 'sub':
            result = a - b;
            console.log("Odejmujesz " + b + " od " + a);
            break;
        case 'multi':
            result = a * b;
            console.log("Mnóżysz liczby " + a + " i " + b);
            break;
        case 'div':
            result = a / b;
            console.log("Dzielisz " + a + " przez " + b);
            break;
        default:
            console.log("Nieobsługiwane działanie: " + op);
            return undefined;
    }

    console.log("Wynik to: " + result);
    return result;
}

console.log(calculator(12, 13, 'add')); 
console.log(calculator(20, 5, 'sub'));   
console.log(calculator(6, 7, 'multi'));   
console.log(calculator(10, 1, 'div'));   
